import React from 'react';
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
const Wrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  height: 100%;
  box-sizing: border-box;
`;
function App() {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
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
      </Router>
    </Wrapper>
  );
}

export default App;
