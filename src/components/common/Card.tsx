import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.09);
`;

type CardProps = {};

const Card: React.FC<CardProps> = (props) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
