import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { colorMap } from '../../config';
const Wrapper = styled.div``;
const DateHeader = styled.div`
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid ${colorMap.border};
`;
const Data = styled.div`
  display: flex;
  padding: 24px 8px 32px;
  > * {
    width: 50%;
    font-weight: 700;
    font-size: 20px;
    padding-left: 24px;
    > span:first-child {
      font-size: 30px;
    }
  }

  > :nth-child(2n-1) {
    border-right: 1px solid ${colorMap.border};
    padding-right: 24px;
  }
`;
const Electricity = styled.div``;
const CeeOhTwo = styled.div``;

type MonthlyBriefProps = {
  data: { dateAsInt: number; ceeOhTwoInKG: number; electricityInKWH: number };
};

const MonthlyBrief: React.FC<MonthlyBriefProps> = (props) => {
  const { dateAsInt, ceeOhTwoInKG, electricityInKWH } = props.data;
  const formattedDate = moment(dateAsInt).format('MMM - YYYY');
  return (
    <Wrapper>
      <DateHeader>{formattedDate}</DateHeader>
      <Data>
        <Electricity>
          <span>{electricityInKWH}</span>
          <span>kWh</span>
        </Electricity>
        <CeeOhTwo>
          <span>{ceeOhTwoInKG}</span>
          <span>kg</span>
        </CeeOhTwo>
      </Data>
    </Wrapper>
  );
};

export default MonthlyBrief;
