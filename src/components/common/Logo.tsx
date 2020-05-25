import React, { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  align-self: flex-start;
`;

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {};

const Logo: React.FC<LogoProps> = (props) => {
  return <Img {...props} src='/img/img_LogoMorpheus.png'></Img>;
};

export default Logo;
