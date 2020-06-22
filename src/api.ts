import { User, LoginData } from './types';
const MOCK_TIMEOUT_MS = 100;
export const auth = {
  signIn: async (user: LoginData) => {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        console.log('mocking login with timeout in ms', MOCK_TIMEOUT_MS);
        if (user.email === 'test@example.com' && user.password === 'password')
          resolve({
            email: 'test@example.com',
            firstName: 'Alexander',
            lastName: 'Reiling',
            username: 'alexreiling',
          });
        else reject('bad credentials');
      }, MOCK_TIMEOUT_MS);
    });
  },
};
