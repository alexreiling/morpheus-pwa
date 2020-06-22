import { ComponentClass, FunctionComponent } from 'react';

import PasswordResetPage from './pages/PasswordResetPage';
import AddContractPage from './pages/AddContractPage';
import DashboardPage from './pages/DashboardPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import RegistrationPage from './pages/RegistrationPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';

type Route = {
  path: string;
  component: ComponentClass | FunctionComponent;
};

export const publicRoutes = {
  login: {
    path: '/login',
    component: LoginPage,
  },
  register: {
    path: '/register',
    component: RegistrationPage,
  },
  resetPassword: {
    path: '/reset-password',
    component: PasswordResetPage,
  },
  privacyPolicy: {
    path: '/privacy-policy',
    component: () => {
      window.location.href = 'https://google.com';
      return null;
    },
  },
  completeProfile: {
    path: '/complete-profile',
    component: CompleteProfilePage,
  },
  termsAndConditions: {
    path: '/terms-and-conditions',
    component: () => {
      window.location.href = 'https://google.com';
      return null;
    },
  },
};

export const protectedRoutes = {
  addContract: {
    path: '/add-contract',
    component: AddContractPage,
  },

  dashboard: {
    path: '/dashboard',
    component: DashboardPage,
  },
  account: {
    path: '/account',
    component: AccountPage,
  },
};
const routes = { ...publicRoutes, ...protectedRoutes };

export default routes;
