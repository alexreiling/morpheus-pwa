import React, { useState, useMemo } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop';
import MainMenu from './components/MainMenu';
import ProtectedRoute from './components/ProtectedRoute';
import { protectedRoutes, publicRoutes } from './routes';
import UIContext from './contexts/UIContext';
import { UserContextProvider } from './contexts/UserContext';
const Wrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  height: 100vh;
  overflow: auto;
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

  return (
    <Wrapper>
      <Router>
        <UIContext.Provider value={uiContext}>
          {/* TODO: this is baaad */}
          <UserContextProvider resetUI={() => setMenuVisible(false)}>
            {menuVisible && <MainMenu onClose={() => setMenuVisible(false)} />}
            <ScrollToTop />
            <Switch>
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
              <Route exact path='/'>
                <Redirect to='/login' />
              </Route>
              <Route>
                <div>Not found</div>
              </Route>
            </Switch>
          </UserContextProvider>
        </UIContext.Provider>
      </Router>
    </Wrapper>
  );
}

export default App;
