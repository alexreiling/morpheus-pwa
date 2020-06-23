import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ hLayout?: boolean }>`
  display: flex;
  flex-direction: ${(p) => (p.hLayout ? 'row' : 'column')};
`;
const Label = styled.div`
  color: #4f575e;
  font-size: 12px;
`;
const Value = styled.div``;
export type SummaryItemProps = {
  label: string;
  value?: string;
  hLayout?: boolean;
};

const SummaryItem: React.FC<SummaryItemProps> = (props) => {
  return (
    <Wrapper hLayout={props.hLayout}>
      <Label>{props.label}</Label>
      <Value>{props.value || '-'}</Value>
    </Wrapper>
  );
};

export default SummaryItem;
