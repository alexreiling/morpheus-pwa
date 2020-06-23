import React, { useContext, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { colorMap } from '../config';
import Logo from './common/Logo';
import { useLocation, Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import routes from '../routes';
import UIContext from '../contexts/UIContext';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 0 0 48px 32px;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(
    130deg,
    rgba(47, 211, 193, 1) -20%,
    rgba(14, 182, 224, 1) 120%
  );
`;
const Close = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 92px;
  left: 66%;
  bottom: 48px;
  border-radius: 8px 0 0 8px;
  background: ${colorMap.bg};
  box-shadow: 0px 11px 32px 0px rgba(0, 0, 0, 0.15);
`;
const StyledLogo = styled(Logo)`
  margin-left: -8px;
  margin-top: 24px;
`;
const Overflow = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-top: 40px;
  height: 100%;
`;
const MainSection = styled.div`
  > :not(:first-child) {
    margin-top: 32px;
  }
`;
const SubSection = styled.div`
  margin-top: auto;
`;
const Item = styled.div<{ selected?: boolean }>`
  color: white;
  cursor: pointer;
  padding: 8px 0;
  ${(p) =>
    p.selected &&
    css`
      font-weight: 500;
    `}
`;

type MainMenuProps = {
  onClose?: () => any;
};
// TODO: replace hard-coded paths with route definition object
const mainRoutes = [
  {
    label: 'Dashboard',
    route: routes.dashboard.path,
  },
  {
    label: 'Electricity Meter Scan',
    route: '/e-meter-scan',
  },
  {
    label: 'My Contracts',
    route: '/contracts',
  },
  {
    label: 'Switch',
    route: '/switch',
  },
];
const subRoutes = [
  {
    label: 'About us',
    route: '/about-us',
  },
  { label: 'My Account', route: routes.account.path },
];
const MainMenu: React.FC<MainMenuProps> = (props) => {
  const { pathname } = useLocation();
  const { signOut } = useContext(UserContext);
  const { setMenuVisible } = useContext(UIContext);
  const overflowRef = useRef(null);

  // TODO: fix undefined context
  const handleClose = () => setMenuVisible!(false);
  useEffect(() => {
    disableBodyScroll(overflowRef.current!);
    return () => {
      enableBodyScroll(overflowRef.current!);
    };
  }, []);
  return (
    <Wrapper>
      <StyledLogo />
      <Close onClick={handleClose} />
      <Overflow ref={overflowRef}>
        <MainSection>
          {mainRoutes.map((r, i) => (
            <Link to={r.route} key={i} onClick={handleClose}>
              <Item selected={pathname.includes(r.route)}>{r.label}</Item>
            </Link>
          ))}
        </MainSection>
        <SubSection>
          {subRoutes.map((r, i) => (
            <Link to={r.route} key={i} onClick={handleClose}>
              <Item selected={pathname.includes(r.route)}>{r.label}</Item>
            </Link>
          ))}
          <Item onClick={signOut}>Logout</Item>
        </SubSection>
      </Overflow>
    </Wrapper>
  );
};

export default MainMenu;
