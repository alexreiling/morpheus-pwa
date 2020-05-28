import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../config';

const Wrapper = styled.div`
  position: relative;
  height: 64px;
  display: flex;
  align-items: center;
  width: 100%;
`;
const BurgerMenuButton = styled.div`
  background: url('/img/ico_burger.svg') no-repeat center;
  width: 16px;
  height: 100%;
  padding: 0 ${spacing.page.hPaddingSmall};
`;
const Title = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Notifations = styled.div`
  background: url('/img/ico_bell.svg') no-repeat center;
  width: 18px;
  height: 100%;
  margin: 0 24px 0 auto;
`;
const ProfileButton = styled.div`
  background: url('/img/profile-pic_dummy.png') no-repeat center;
  width: 24px;
  height: 24px;
`;
type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Wrapper>
      <BurgerMenuButton></BurgerMenuButton>
      <Title>Dashboard</Title>
      <Notifations />
      <ProfileButton />
    </Wrapper>
  );
};

export default Header;
