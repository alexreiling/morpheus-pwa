import React, { HTMLAttributes, MouseEvent } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  cursor: pointer;
  height: 14px;
  width: 8px;
  background-image: url('/img/ico_back.svg');
  background-repeat: no-repeat;
`;

type BackButtonProps = HTMLAttributes<HTMLDivElement> & {
  preventDefault?: boolean;
};

const BackButton: React.FC<BackButtonProps> = (props) => {
  const { preventDefault, onClick, ...rest } = props;
  const { goBack } = useHistory();
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    !!preventDefault && goBack();
    onClick && onClick(e);
  };
  return <Wrapper onClick={handleClick} {...rest} />;
};

export default BackButton;
