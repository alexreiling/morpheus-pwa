import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colorMap } from '../../config';

// TODO: refactor this awful mess
const Wrapper = styled.input<{ checked?: boolean }>`
  position: relative;
  min-width: 24px;
  height: 24px;
  border: none;
  margin: 0;
  appearance: none;
  background: ${colorMap.form.bg};
  border-radius: 3px;
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      rgba(47, 211, 193, 1) 0%,
      rgba(14, 182, 224, 1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  ::after {
    content: '';
    position: absolute;
    left: 8.5px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  ${(p) =>
    p.checked &&
    css`
      ::before {
        opacity: 1;
      }
      ::after {
        opacity: 1;
      }
    `}
`;

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <Wrapper {...props} type='checkbox'></Wrapper>;
};

export default Checkbox;
