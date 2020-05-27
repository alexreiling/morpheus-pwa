import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import ProgressIndicationHeader from '../components/ProgressIndicationHeader';
import { spacing, colorMap } from '../config';
import BackButton from '../components/common/BackButton';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Paragraph from '../components/common/Paragraph';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import BigNumericInput from '../components/BigNumericInput';
import BigRangeSlider from '../components/BigRangeSlider';
import PageTitle from '../components/common/PageTitle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 96px ${spacing.page.padding} 48px;
  font-size: 16px;
`;
const StyledInput = styled(Input)``;
const StyledButton = styled(Button)`
  margin-top: 40px;
`;
const ProgressIndicator = styled(ProgressIndicationHeader)`
  margin: 16px 0 24px;
`;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 24px;
`;
const LabelledSeparator = styled.div<{ vCorrection?: number }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 100%;
  text-align: center;
  font-weight: bold;

  margin: 24px 0 15px;
  > * {
    background: ${colorMap.bg};
    padding: 0 16px;
  }
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    top: ${(p) =>
      p.vCorrection ? 'calc(50% + ' + p.vCorrection + 'px)' : '50%'};
    z-index: -1;
    border-bottom: 1px solid ${colorMap.border};
  }
`;
const MeterImage = styled.img`
  align-self: flex-start;
  margin-bottom: 34px;
`;

type CompleteProfilePageProps = {};

const CompleteProfilePage: React.FC<CompleteProfilePageProps> = (props) => {
  const [data, setData] = useState({
    zipCode: '',
    numPeople: 2,
    yearlyConsumption: 2500,
    meterInfo: {
      serialNo: '',
      currentReading: 0,
    },
  });
  const [stepIndex, setStepIndex] = useState(0);
  const { pathname } = useLocation();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const steps = [
    {
      title: 'ZIP Code',
      view: (
        <>
          <StyledParagraph>
            To get started, please enter your ZIP code:
          </StyledParagraph>
          <StyledInput
            placeholder='Zip code'
            value={data.zipCode}
            name='zipCode'
            onChange={handleChange}
            icon='misc'
          />
        </>
      ),
    },
    {
      title: 'Consumption',
      view: (
        <>
          <StyledParagraph>
            How many people live in your household?
          </StyledParagraph>
          <BigRangeSlider
            name='numPeople'
            value={data.numPeople}
            onChange={handleChange}
            unit='people'
            min={1}
            max={10}
          />
          <LabelledSeparator vCorrection={4}>
            <span>or</span>
          </LabelledSeparator>
          <StyledParagraph>
            How much electricity (kWh) do you use yearly?
          </StyledParagraph>
          <BigNumericInput
            value={data.yearlyConsumption}
            onChange={handleChange}
            name='yearlyConsumption'
            unit='kWh'
            label='Amount'
          />
        </>
      ),
    },
    {
      title: 'Scan',
      view: (
        <>
          <PageTitle width={240}>Scan your electricity meter</PageTitle>
          <MeterImage src='/img/ico_meter.svg' />
          <StyledParagraph>
            Take a photo of your electricity meter to automatically extract the
            serial number and current reading.
          </StyledParagraph>
          <Button>Scan Meter</Button>
        </>
      ),
      disableNext: true,
    },
  ];
  return (
    <Wrapper>
      <BackButton
        onClick={!!stepIndex ? () => setStepIndex(stepIndex - 1) : undefined}
        preventDefault={!stepIndex}
      />
      <ProgressIndicator
        steps={steps.map((s) => s.title)}
        currentStepIndex={stepIndex}
      />
      {steps[stepIndex].view}
      {!steps[stepIndex].disableNext && (
        <StyledButton onClick={() => setStepIndex(stepIndex + 1)}>
          Continue
        </StyledButton>
      )}
    </Wrapper>
  );
};

export default CompleteProfilePage;
