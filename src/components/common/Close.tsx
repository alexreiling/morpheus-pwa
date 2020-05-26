import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: url('/img/ico_close.svg');
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

type CloseProps = HTMLAttributes<HTMLDivElement> & {};

const Close: React.FC<CloseProps> = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

export default Close;
