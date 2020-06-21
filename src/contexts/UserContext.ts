import { User } from '../types';
import { createContext } from 'react';

export interface UserContextProps {
  user?: User;
  logout: () => any;
}
const UserContext = createContext<Partial<UserContextProps>>({});
export default UserContext;
