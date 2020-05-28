import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../config';

const Wrapper = styled.div`
  width: calc(100% + 2 * ${spacing.page.hPaddingSmall});
  height: auto;
  padding-top: 66%;
  background: url('/img/hero_dummy.png');
  margin: 0 -${spacing.page.hPaddingSmall};
`;

type HeroProps = {};

const Hero: React.FC<HeroProps> = (props) => {
  return <Wrapper></Wrapper>;
};

export default Hero;
