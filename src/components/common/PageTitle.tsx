import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ width?: number; noMarginTop?: boolean }>`
  font-size: 28px;
  margin-bottom: 32px;
  ${(p) =>
    !p.noMarginTop &&
    css`
      margin-top: 32px;
    `}
  ${(p) =>
    p.width &&
    css`
      width: ${p.width}px;
    `}
`;
const Highlight = styled.div`
  height: 5px;
  width: 32px;
  background: linear-gradient(
    90deg,
    rgba(47, 211, 193, 1) 0%,
    rgba(14, 182, 224, 1) 100%
  );
  margin-top: 16px;
  border-radius: 8px;
`;

type PageTitleProps = {
  children?: string;
  width?: number;
  noMarginTop?: boolean;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { children, width, noMarginTop } = props;
  return (
    <Wrapper width={width} noMarginTop={noMarginTop}>
      <div>{children}</div>
      <Highlight />
    </Wrapper>
  );
};

export default PageTitle;
