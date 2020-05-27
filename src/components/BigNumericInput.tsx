import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  border: 2px solid #17c0d4;
  padding: 8px 24px;
`;
const StyledLabel = styled.label`
  font-size: 14px;
  width: 100%;
  color: #afafaf;
  margin-bottom: 8px;
`;
const StyledInput = styled.input`
  border: none;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  flex-basis: 50%;
  min-width: 0;
`;
const Unit = styled.div`
  align-self: flex-end;
  flex-grow: 0;
  font-size: 20px;
`;
type BigNumericInputProps = InputHTMLAttributes<HTMLInputElement> & {
  unit?: string;
  label?: string;
};

const BigNumericInput: React.FC<BigNumericInputProps> = (props) => {
  const { unit, label, ...inputProps } = props;
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} type='number'></StyledInput>
      <Unit>{unit}</Unit>
    </Wrapper>
  );
};

export default BigNumericInput;
