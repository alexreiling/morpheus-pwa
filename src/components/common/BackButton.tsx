import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  cursor: pointer;
  height: 14px;
  width: 8px;
  background-image: url('/img/ico_back.svg');
  background-repeat: no-repeat;
`;

type BackButtonProps = {};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const { goBack } = useHistory();
  return <Wrapper onClick={goBack} />;
};

export default BackButton;
