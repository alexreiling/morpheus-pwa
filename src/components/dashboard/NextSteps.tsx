import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 24px 16px;
`;
const Header = styled.div`
  margin-bottom: 18px;
  font-size: 16px;
`;
const Item = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 12px;
  &:not(:first-child) {
    margin-top: 12px;
  }
`;
const Bullet = styled.div`
  height: 18px;
  width: 44px;
  border-radius: 9px;
  background: linear-gradient(
    135deg,
    rgba(14, 182, 224, 1) 0%,
    rgba(128, 97, 252, 1) 150%
  );
  margin-right: 12px;
`;
type NextStepModel = {
  text: string;
  path?: string;
};
type NextStepsProps = {
  data: {
    steps: NextStepModel[];
  };
};

const NextSteps: React.FC<NextStepsProps> = (props) => {
  const { steps } = props.data;
  return (
    <Wrapper>
      <Header>Next steps</Header>
      {steps.map((step, index) => {
        const View = (
          <Item key={index}>
            <Bullet />
            <div>{step.text}</div>
          </Item>
        );
        return step.path ? (
          <Link to={step.path} key={index}>
            {View}
          </Link>
        ) : (
          View
        );
      })}
    </Wrapper>
  );
};

export default NextSteps;
