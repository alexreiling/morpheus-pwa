import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const ButtonStyles = css`
  border: none;
  font: inherit;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-radius: 28px;
  color: white;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(47, 211, 193, 1) 0%,
    rgba(14, 182, 224, 1) 100%
  );
  box-shadow: 0px 2px 20px 0px rgba(23, 192, 212, 0.38);
`;
const Inner = styled.div<{ cancelStyle?: boolean }>`
  ${ButtonStyles}
  ${(p) =>
    p.cancelStyle &&
    css`
      background: white;
      border: 2px solid red;
      color: red;
      font-weight: 500;
      box-shadow: none;
    `}
`;

type ButtonProps = {
  children?: string;
  linkTo?: string;
  cancelStyle?: boolean;
} & ButtonHTMLAttributes<HTMLDivElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, linkTo, ...rest } = props;
  const StyledButton = <Inner {...rest}>{children}</Inner>;
  return linkTo ? (
    <StyledLink to={linkTo}>{StyledButton}</StyledLink>
  ) : (
    StyledButton
  );
};

export default Button;
