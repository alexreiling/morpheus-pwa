import { User, LoginData, RegistrationData } from './types';
import { routes } from './backend';

const auth = {
  register: async (data: RegistrationData) => {
    const { password, ...personalData } = data;
    return routes.auth.register({
      password,
      username: personalData.email,
      personalData,
    });
  },
  signIn: async (credentials: LoginData) => {
    return routes.auth.login(credentials);
  },
};
const user = {
  update: async (userData: User) => {
    return routes.user.update(userData);
  },
};
const api = {
  auth,
  user,
};
export default api;
