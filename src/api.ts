import { User, LoginData, RegistrationData } from './types';
import { load, save, upsertItem } from './util';
const MOCK_TIMEOUT_MS = 100;
const KEYS = {
  users: 'devUsers',
};
const auth = {
  register: async (data: RegistrationData) => {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        console.log('mocking registration with timeout in ms', MOCK_TIMEOUT_MS);
        if (!!data.email?.length && !!data.password.length)
          try {
            upsertItem(KEYS.users, 'email', data);
            resolve();
          } catch (err) {
            reject(err);
          }
        else reject('cannot register: no email or password provided');
      }, MOCK_TIMEOUT_MS);
    });
  },
  signIn: async (credentials: LoginData) => {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        console.log('mocking login with timeout in ms', MOCK_TIMEOUT_MS);
        let users = load(KEYS.users) as any[];
        if (!users || !users.length) return reject('no registered users');
        let found: any = users.find(
          (dbUser) =>
            dbUser.password === credentials.password &&
            dbUser.email === credentials.email
        );
        if (found) {
          delete found.password;
          resolve(found);
        } else reject('bad credentials');
      }, MOCK_TIMEOUT_MS);
    });
  },
};
const user = {
  personal: {
    update: async (userData: User) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(
            'mocking update personal user info with timeout in ms',
            MOCK_TIMEOUT_MS
          );
          save(KEYS.users, userData);
          resolve();
        }, MOCK_TIMEOUT_MS);
      });
    },
  },
};
const api = {
  auth,
  user,
};
export default api;
