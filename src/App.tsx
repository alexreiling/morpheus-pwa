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
const Wrapper = styled.div`
  border: 1px solid grey;
  width: 375px;
  height: 100vh;
  margin: auto;
  box-sizing: border-box;
`;
function App() {
  return (
    <Wrapper>
      <Router>
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
