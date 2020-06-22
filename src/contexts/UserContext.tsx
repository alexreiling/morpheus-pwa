import { User, LoginData } from '../types';
import React, { createContext, useReducer } from 'react';
import { load, save } from '../util';
import { auth } from '../api';

export interface UserContextProps {
  user?: User;
  isAuthenticated: boolean;
  signIn: (loginData: LoginData) => Promise<User>;
  signOut: () => any;
}
interface UserContextProviderProps {
  resetUI: () => any;
}
const UserContext = createContext<Partial<UserContextProps>>({});
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'loginUser':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'logoutUser':
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
      };

    default:
      return state;
  }
};
export const UserContextProvider: React.FC<UserContextProviderProps> = (
  props
) => {
  const { resetUI } = props;
  let localStorageUser = load('user');
  const initialState = {
    user: localStorageUser,
    isAuthenticated: !!localStorageUser,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const signIn = (loginData: LoginData) => {
    return auth.signIn(loginData).then((user) => {
      save('user', user);
      dispatch({ type: 'loginUser', payload: { user } });
      console.log('logged in as', user);
      return user;
    });
  };
  const signOut = () => {
    save('user', undefined);
    dispatch({ type: 'logoutUser' });
    resetUI();
    console.log('logged out');
  };
  return (
    <UserContext.Provider value={{ ...state, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
