import React from 'react';
import styled from 'styled-components';
import Logo from '../components/common/Logo';
import PageTitle from '../components/common/PageTitle';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import LinkAsText from '../components/common/LinkAsText';
import { page } from '../config';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${page.padding};
  height: 100%;
  padding-top: 96px;
`;
const StyledLogo = styled(Logo)`
  margin-bottom: 24px;
`;
const LinkToPasswordResetPage = styled(LinkAsText)`
  letter-spacing: 0.0125em;
`;
const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;
const StyledButton = styled(Button)`
  margin-top: 32px;
`;
const Footer = styled.div`
  margin-top: auto;
  font-size: 14px;
  text-align: center;
`;
const LinkToRegistration = styled(LinkAsText)``;

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  return (
    <Wrapper>
      <StyledLogo />
      <PageTitle width={126} noMarginTop>
        Sign in to morpheus
      </PageTitle>
      <StyledInput placeholder='Email address' icon='email' />
      <StyledInput type='password' placeholder='Password' icon='password' />
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
