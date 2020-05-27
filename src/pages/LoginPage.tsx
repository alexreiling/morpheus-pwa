import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Logo from '../components/common/Logo';
import PageTitle from '../components/common/PageTitle';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import LinkAsText from '../components/common/LinkAsText';
import { spacing } from '../config';

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
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
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
      <StyledButton>Sign in</StyledButton>
      <Footer>
        Don't have an Account?{' '}
        <LinkToRegistration to='/register'>Register</LinkToRegistration>
      </Footer>
    </Wrapper>
  );
};

export default LoginPage;
