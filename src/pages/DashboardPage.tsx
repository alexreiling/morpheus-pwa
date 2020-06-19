import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import { spacing } from '../config';
import Hero from '../components/common/Hero';
import Card from '../components/common/Card';
import MonthlyBrief from '../components/dashboard/MonthlyBrief';
import NextSteps from '../components/dashboard/NextSteps';

const Wrapper = styled.div`
  padding: ${spacing.page.hPaddingSmall};
`;
const CardList = styled.div`
  margin-top: -52px;
  > * {
    background: white;
    margin-bottom: 16px;
  }
`;

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = (props) => {
  const itemFeed = [];
  return (
    <Wrapper>
      <Header title='Dashboard' />
      <Hero />
      {/* {itemFeed.map((item) => (
        <Card></Card>
      ))} */}
      <CardList>
        <Card>
          <MonthlyBrief
            data={{
              ceeOhTwoInKG: 364,
              electricityInKWH: 620,
              dateAsInt: Date.now().valueOf(),
            }}
          />
        </Card>
        <Card>
          <NextSteps
            data={{
              steps: [
                { text: 'Add your current contract', path: 'add-contract' },
                { text: 'Take a picture of your electricity meter' },
                { text: 'Change to an eco-friendly electricity provider' },
              ],
            }}
          />
        </Card>
      </CardList>
    </Wrapper>
  );
};

export default DashboardPage;
