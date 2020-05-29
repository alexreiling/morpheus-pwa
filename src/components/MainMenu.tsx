import React from 'react';
import styled, { css } from 'styled-components';
import { colorMap } from '../config';
import Logo from './common/Logo';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 0 0 48px 32px;
  height: 100%;
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
  position: absolute;
  margin-left: 24px;
  margin-top: 24px;
`;
const MainSection = styled.div`
  margin-top: 192px;
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
const mainRoutes = [
  {
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    label: 'Electricity Meter Scan',
    route: 'e-meter-scan',
  },
  {
    label: 'My Contracts',
    route: 'contracts',
  },
  {
    label: 'Switch',
    route: 'switch',
  },
];
const subRoutes = [
  {
    label: 'About us',
  },
  { label: 'Change password' },
  { label: 'Logout' },
];
const MainMenu: React.FC<MainMenuProps> = (props) => {
  const { onClose } = props;
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <StyledLogo />
      <Close onClick={onClose} />
      <MainSection>
        {mainRoutes.map((r) => (
          <Item selected={pathname.includes(r.route)}>{r.label}</Item>
        ))}
      </MainSection>
      <SubSection>
        {' '}
        {subRoutes.map((r) => (
          <Item>{r.label}</Item>
        ))}
      </SubSection>
    </Wrapper>
  );
};

export default MainMenu;
