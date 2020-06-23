import { User, LoginData } from '../types';
import React, { createContext, useReducer } from 'react';
import { load, save } from '../util';
import api from '../api';

export interface UserContextProps {
  user?: User;
  isAuthenticated: boolean;
  signIn: (loginData: LoginData) => Promise<User>;
  signOut: () => any;
  updateUserData: (user: User) => any;
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
    case 'updateUser':
      return {
        ...state,
        user: action.payload.user,
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
    return api.auth.signIn(loginData).then((user) => {
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
  const updateUserData = (user: User) => {
    return api.user.personal.update(user).then(() => {
      save('user', user);
      dispatch({ type: 'updateUser', payload: { user } });
      console.log('updated user');
    });
  };
  return (
    <UserContext.Provider value={{ ...state, signIn, signOut, updateUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
