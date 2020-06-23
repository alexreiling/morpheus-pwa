import React from 'react';
import styled from 'styled-components';
import SummaryItem, { SummaryItemProps } from './SummaryItem';
import { colorMap } from '../../../config';

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 8px 14px;
  background: ${colorMap.form.bg};
`;
const Header = styled.div`
  display: flex;
`;
const Label = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
  font-weight: 500;
`;
const Edit = styled.div`
  margin-left: auto;
  color: ${colorMap.accentOne};
  cursor: pointer;
`;
const ItemWrapper = styled.div`
  > :not(:first-child) {
    margin-top: 16px;
  }
`;

type SummaryProps = {
  name?: string;
  items: SummaryItemProps[];
  onEdit?: () => any;
  collapsible?: boolean;
  hLayout?: boolean;
};

const Summary: React.FC<SummaryProps> = (props) => {
  const { name, items, hLayout, onEdit } = props;
  return (
    <Wrapper>
      <Header>
        <Label>{name}</Label>
        {onEdit && <Edit onClick={onEdit}>Edit</Edit>}
      </Header>

      <ItemWrapper>
        {items.map((item) => {
          return <SummaryItem {...item} hLayout={item.hLayout || hLayout} />;
        })}
      </ItemWrapper>
    </Wrapper>
  );
};

export default Summary;
