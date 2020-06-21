import React, { useState, createContext, useMemo, useCallback } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop';
import MainMenu from './components/MainMenu';
import { User, LoginData } from './types';
import { loginUser } from './api';
import ProtectedRoute from './components/ProtectedRoute';
import UserContext, { UserContextProps } from './contexts/UserContext';
import { protectedRoutes, publicRoutes } from './routes';
import UIContext, { UIContextProps } from './contexts/UIContext';
const Wrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  height: 100%;
  box-sizing: border-box;
`;

function App() {
  // UI context
  const [menuVisible, setMenuVisible] = useState(false);
  const uiContext = useMemo(
    () => ({
      menuVisible,
      setMenuVisible,
    }),
    [menuVisible, setMenuVisible]
  );

  // user context
  const [user, setUser] = useState<User | undefined>(undefined);
  const handleLogin = (loginData: LoginData) => {
    return loginUser(loginData).then((data) => {
      setUser(data);
      return data;
    });
  };
  const handleLogout = useCallback(() => {
    setMenuVisible(false);
    setUser(undefined);
    console.log('logged out');
  }, [setUser, setMenuVisible]);
  const userContext = useMemo(
    () => ({
      user,
      logout: handleLogout,
    }),
    [user, handleLogout]
  );

  return (
    <Wrapper>
      <Router>
        <UIContext.Provider value={uiContext}>
          <UserContext.Provider value={userContext}>
            {user && menuVisible && (
              <MainMenu onClose={() => setMenuVisible(false)} />
            )}
            <ScrollToTop />
            <Switch>
              <Route
                path='/login'
                render={(props) => <LoginPage onLogin={handleLogin} />}
              />

              {Object.keys(publicRoutes).map((key) => {
                //@ts-ignore
                const route = publicRoutes[key];
                return <Route path={route.path} component={route.component} />;
              })}
              {Object.keys(protectedRoutes).map((key) => {
                //@ts-ignore
                const route = protectedRoutes[key];
                return (
                  <ProtectedRoute
                    path={route.path}
                    component={route.component}
                  />
                );
              })}

              {!user && (
                <Route path='/'>
                  <Redirect to='/login' />
                </Route>
              )}
            </Switch>
          </UserContext.Provider>
        </UIContext.Provider>
      </Router>
    </Wrapper>
  );
}

export default App;
