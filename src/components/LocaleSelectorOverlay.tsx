import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Locale } from '../types';
import { colorMap, spacing } from '../config';
import Close from './common/Close';

const Wrapper = styled.div``;
const Selector = styled.div`
  position: absolute;
  width: 100%;
  background: ${colorMap.bg};
  bottom: 0;
  left: 0;
  z-index: 10;
  opacity: 1;
`;
const OpaqueOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: grey;
  z-index: 3;
`;
const SelectorHeader = styled.div`
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid ${colorMap.border};
  padding: 16px ${spacing.page.hPadding};
  font-weight: 500;
`;
const LocaleItem = styled.div<{ selected?: boolean }>`
  padding: 12px ${spacing.page.hPadding};
  cursor: pointer;
  position: relative;
  :not(:last-child) {
    border-bottom: 0.5px solid ${colorMap.border};
  }
  ${(p) =>
    p.selected &&
    css`
      ::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 16px;
        right: 0;
        top: 0;
        margin-right: ${spacing.page.hPadding};
        background: url('/img/ico_check.svg') no-repeat center;
      }
    `}
`;
const StyledClose = styled(Close)`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  margin-right: ${spacing.page.hPadding};
`;
type LocaleSelectorOverlayProps = {
  locales?: Locale[];
  defaultLocale?: string;
  onClose?: (selectedLocale: string) => any;
  onSelect?: (selectedLocale: string) => any;
};

const LocaleSelectorOverlay: React.FC<LocaleSelectorOverlayProps> = (props) => {
  const { locales = [], defaultLocale, onClose } = props;
  const [selectedLocale, setSelectedLocale] = useState(
    defaultLocale || locales[0]?.id || ''
  );
  console.log(selectedLocale);

  return (
    <Wrapper>
      <OpaqueOverlay onClick={() => onClose && onClose(selectedLocale)} />
      <Selector>
        <SelectorHeader>
          Language
          <StyledClose onClick={() => onClose && onClose(selectedLocale)} />
        </SelectorHeader>
        {locales.map((l) => (
          <LocaleItem
            key={l.id}
            onClick={() => setSelectedLocale(l.id)}
            selected={l.id === selectedLocale}
          >
            {l.displayName}
          </LocaleItem>
        ))}
      </Selector>
    </Wrapper>
  );
};

export default LocaleSelectorOverlay;
