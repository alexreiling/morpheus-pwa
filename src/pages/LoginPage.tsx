import React, { useState, ChangeEvent, useContext } from 'react';
import styled from 'styled-components';
import Logo from '../components/common/Logo';
import PageTitle from '../components/common/PageTitle';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import LinkAsText from '../components/common/LinkAsText';
import { spacing } from '../config';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 96px ${spacing.page.padding} 48px;
`;
const StyledLogo = styled(Logo)`
  margin-bottom: 24px;
`;
const LinkToPasswordResetPage = styled(LinkAsText)`
  letter-spacing: 0.0125em;
`;
const StyledInput = styled(Input)`
  margin-bottom: ${spacing.form.vGap};
`;
const StyledButton = styled(Button)`
  margin: 32px 0;
`;
const Footer = styled.div`
  margin-top: auto;
  font-size: 14px;
  text-align: center;
`;
const LinkToRegistration = styled(LinkAsText)``;

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const { signIn } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { push } = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleLogin = () => {
    setTimeout(() => {
      signIn!(credentials)
        .then(() => push('/dashboard'))
        .catch((error: string) => alert(error));
    }, 1000);
  };
  return (
    <Wrapper>
      <StyledLogo />
      <PageTitle width={126} noMarginTop>
        Sign in to morpheus
      </PageTitle>
      <StyledInput
        placeholder='Email address'
        icon='email'
        name='email'
        onChange={handleChange}
      />
      <StyledInput
        type='password'
        placeholder='Password'
        name='password'
        icon='password'
        onChange={handleChange}
      />
      <LinkToPasswordResetPage to='/reset-password'>
        Forgot Password?
      </LinkToPasswordResetPage>
      <StyledButton onClick={handleLogin}>Sign in</StyledButton>
      <Footer>
        Don't have an Account?{' '}
        <LinkToRegistration to='/register'>Register</LinkToRegistration>
      </Footer>
    </Wrapper>
  );
};

export default LoginPage;
