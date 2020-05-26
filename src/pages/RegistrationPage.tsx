import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { spacing, locales } from '../config';
import BackButton from '../components/common/BackButton';
import PageTitle from '../components/common/PageTitle';
import Input from '../components/common/Input';
import LinkAsText from '../components/common/LinkAsText';
import Checkbox from '../components/common/Checkbox';
import Button from '../components/common/Button';
import { useHistory } from 'react-router-dom';
import LocaleSelectorOverlay from '../components/LocaleSelectorOverlay';
import ScrollToTop from '../components/ScrollToTop';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 96px ${spacing.page.padding} 48px;
`;
const StyledInput = styled(Input)`
  margin-bottom: ${spacing.form.vGap};
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  > :nth-child(2) {
    margin-left: 10px;
    white-space: pre-wrap;
  }
  margin-bottom: 24px;
`;
const StyledButton = styled(Button)`
  margin: 32px 0;
`;
const Footer = styled.div`
  margin-top: auto;
  text-align: center;
`;

type RegistrationPageProps = {};

const RegistrationPage: React.FC<RegistrationPageProps> = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
    termsAccepted: false,
    locale: locales.default,
    localeSetByUser: false,
  });
  const { push } = useHistory();
  const handleOverlayClose = (locale: string) => {
    setState({ ...state, locale, localeSetByUser: true });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = e.target;
    let v = e.target.type === 'checkbox' ? checked : value;
    setState({ ...state, [name]: v });
  };
  const handlePost = () => {
    setTimeout(() => {
      push('/login');
    }, 1000);
  };
  return (
    <>
      <ScrollToTop />

      {!state.localeSetByUser && (
        <LocaleSelectorOverlay
          locales={locales.supported}
          defaultLocale='en-US'
          onClose={handleOverlayClose}
        />
      )}
      <Wrapper>
        <BackButton />
        <PageTitle width={160}>Create a new account</PageTitle>
        <StyledInput
          placeholder='Full name'
          name='name'
          value={state.name}
          onChange={handleChange}
          icon='person'
        />
        <StyledInput
          placeholder='Email address'
          name='email'
          value={state.email}
          onChange={handleChange}
          icon='email'
        />
        <StyledInput
          type='password'
          placeholder='Enter your password'
          name='password'
          value={state.password}
          onChange={handleChange}
          icon='password'
        />
        <StyledInput
          type='password'
          placeholder='Confirm password'
          name='passwordCheck'
          value={state.passwordCheck}
          onChange={handleChange}
          icon='password'
        />
        <CheckboxWrapper>
          <Checkbox
            name='termsAccepted'
            checked={state.termsAccepted}
            onChange={handleChange}
          />
          <div>
            {'Click here to accept our '}
            <LinkAsText to='/terms-and-conditions'>
              Terms and Conditions
            </LinkAsText>
            {' & '}
            <LinkAsText to='/privacy-policy'>Data Policy</LinkAsText>{' '}
          </div>
        </CheckboxWrapper>
        <StyledButton onClick={handlePost}>Create account</StyledButton>
        <Footer>
          Already have an account? <LinkAsText to='/login'>Sign in</LinkAsText>
        </Footer>
      </Wrapper>
    </>
  );
};

export default RegistrationPage;
