import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import styled from 'styled-components';
import PasswordResetPage from './pages/PasswordResetPage';
import RegistrationPage from './pages/RegistrationPage';
import ScrollToTop from './components/ScrollToTop';
import CompleteProfilePage from './pages/CompleteProfilePage';
import DashboardPage from './pages/DashboardPage';
import MainMenu from './components/MainMenu';
const Wrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  height: 100%;
  box-sizing: border-box;
`;
type GlobalContextType = {
  setMenuVisible: (visible: boolean) => any;
};
export const GlobalContext = createContext<GlobalContextType>({
  setMenuVisible: () => {},
});
function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  const globalContext: GlobalContextType = {
    setMenuVisible,
  };
  return (
    <Wrapper>
      <Router>
        {menuVisible && <MainMenu onClose={() => setMenuVisible(false)} />}
        <ScrollToTop />
        <GlobalContext.Provider value={globalContext}>
          <Switch>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/reset-password'>
              <PasswordResetPage />
            </Route>
            <Route path='/register'>
              <RegistrationPage />
            </Route>
            <Route path='/complete-profile'>
              <CompleteProfilePage />
            </Route>
            <Route path='/dashboard'>
              <DashboardPage />
            </Route>
            <Route
              path='/privacy-policy'
              component={() => {
                window.location.href = 'https://google.com';
                return null;
              }}
            />
            <Route
              path='/terms-and-conditions'
              component={() => {
                window.location.href = 'https://google.com';
                return null;
              }}
            />
            <Route path='/'>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </GlobalContext.Provider>
      </Router>
    </Wrapper>
  );
}

export default App;
