import React, { useState, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import PageTitle from '../components/common/PageTitle';
import { spacing } from '../config';
import BackButton from '../components/common/BackButton';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Paragraph from '../components/common/Paragraph';

const Wrapper = styled.div<{ dark?: boolean }>`
  padding: ${spacing.page.padding};
  padding-top: 136px;
  height: 100%;
  transition: background 1s ease-in-out;

  ${(p) =>
    p.dark &&
    css`
      background: #252a49;
      color: white;
      text-align: center;
    `}
`;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 24px;
`;
const EmailInput = styled(Input)`
  margin-bottom: 24px;
`;
const Confirmation = styled.div`
  font-size: 22px;
  margin-bottom: 24px;
`;
const ConfirmationSub = styled.div`
  font-size: 14px;
  color: #acb5c5;
  margin-bottom: 88px;
`;
type PasswordResetPageProps = {};

const PasswordResetPage: React.FC<PasswordResetPageProps> = (props) => {
  const [email, setEmail] = useState<string>();
  const [resetConfirmed, setResetConfirmed] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordReset = () => {
    setTimeout(() => setResetConfirmed(true), 1000);
  };
  return (
    <Wrapper dark={resetConfirmed}>
      {!resetConfirmed ? (
        <>
          {' '}
          <BackButton />
          <PageTitle width={128}>Forgot password?</PageTitle>
          <StyledParagraph>
            Enter your email address to receive a link to reset your password.
          </StyledParagraph>
          <EmailInput
            placeholder='Email address'
            icon='email'
            value={email}
            onChange={handleChange}
          />
          <Button onClick={handlePasswordReset}>Reset Password</Button>
        </>
      ) : (
        <>
          <img src='/img/Graphics-Check-big.svg' />
          <Confirmation>Your password was reset!</Confirmation>
          <ConfirmationSub>
            Please check your email to set a new password and login into your
            account.
          </ConfirmationSub>
          <Button linkTo='/login'>Login</Button>
        </>
      )}
    </Wrapper>
  );
};

export default PasswordResetPage;
