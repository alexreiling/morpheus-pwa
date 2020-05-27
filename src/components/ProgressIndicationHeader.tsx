import React from 'react';
import styled from 'styled-components';
import { font, colorMap } from '../config';

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colorMap.border};
`;
const ProgressCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #d0f3f7;
  border: 5px solid #17c0d4;
  border-radius: 40px;
  font-size: 16px;
  margin-right: 24px;
`;
const Heading = styled.div`
  font-size: ${font.sizes[1]};
  margin-bottom: 12px;
`;
const NextStepIndicator = styled.div`
  color: #868b90;
  font-size: 16px;
`;
type ProgressIndicationHeaderProps = {
  steps: string[];
  currentStepIndex: number;
};

const ProgressIndicationHeader: React.FC<ProgressIndicationHeaderProps> = (
  props
) => {
  const { steps, currentStepIndex, ...rest } = props;
  const currentStep = steps[currentStepIndex];
  const nextStep = steps[currentStepIndex + 1];
  return (
    <Wrapper {...rest}>
      <ProgressCircle>{`${currentStepIndex + 1} of ${
        steps.length
      }`}</ProgressCircle>
      <div>
        <Heading>{currentStep}</Heading>
        <NextStepIndicator>
          {nextStep ? 'Next: ' + nextStep : ''}
        </NextStepIndicator>
      </div>
    </Wrapper>
  );
};

export default ProgressIndicationHeader;
