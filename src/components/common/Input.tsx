import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colorMap } from '../../config';

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  height: 48px;
  width: 100%;

  font-size: 14px;
`;
const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  padding: 0 24px 0 56px;
  background: ${colorMap.form.bg};

  ::placeholder {
    color: #b1b0b5;
  }
  -webkit-autofill {
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  width: 56px;
`;
const ICONS = {
  email: '/img/ico_mail.svg',
  password: '/img/ico_password.svg',
  person: '/img/ico_person.svg',
  misc: '/img/ico_misc.svg',
};
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: keyof typeof ICONS;
};

const Input: React.FC<InputProps> = (props) => {
  const { icon, className, ...rest } = props;
  return (
    <Wrapper className={className}>
      {icon && (
        <IconWrapper>
          <img src={ICONS[icon]} />
        </IconWrapper>
      )}
      <StyledInput {...rest}></StyledInput>
    </Wrapper>
  );
};

export default Input;
