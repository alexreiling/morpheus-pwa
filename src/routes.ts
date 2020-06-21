import { ComponentClass, FunctionComponent } from 'react';

import PasswordResetPage from './pages/PasswordResetPage';
import AddContractPage from './pages/AddContractPage';
import DashboardPage from './pages/DashboardPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import RegistrationPage from './pages/RegistrationPage';

type Route = {
  path: string;
  component: ComponentClass | FunctionComponent;
};

export const publicRoutes = {
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
  completeProfile: {
    path: '/complete-profile',
    component: CompleteProfilePage,
  },
  dashboard: {
    path: '/dashboard',
    component: DashboardPage,
  },
};
const routes = { ...publicRoutes, ...protectedRoutes };

export default routes;
