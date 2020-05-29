import React, { useContext } from 'react';
import styled from 'styled-components';
import { spacing } from '../../config';
import { GlobalContext } from '../../App';

const Wrapper = styled.div`
  position: relative;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const BurgerMenuButton = styled.div`
  cursor: pointer;
  background: url('/img/ico_burger.svg') no-repeat center;
  width: 16px;
  height: 100%;
  padding: 0 ${spacing.page.hPaddingSmall};
`;
const Title = styled.div`
  position: absolute;
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
  const { setMenuVisible } = useContext(GlobalContext);
  return (
    <Wrapper>
      <Title>Dashboard</Title>

      <BurgerMenuButton onClick={() => setMenuVisible(true)}></BurgerMenuButton>
      <Notifations />
      <ProfileButton />
    </Wrapper>
  );
};

export default Header;
