import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { colorMap } from '../config';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Descriptor = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding: 8px 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${colorMap.accentTwo};
`;
const thumbStyle = css`
  appearance: none;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 2px 15px 0px rgba(158, 158, 158, 0.5);
  background: ${colorMap.accentTwo};
  border: 8px solid white;
`;
const trackStyle = css`
  height: 10px;
  background: ${colorMap.accentTwo};
  width: 100%;
  border-radius: 5px;
`;
const Slider = styled.input`
  width: 100%;
  appearance: none;
  cursor: pointer;
  outline: none;
  &::-webkit-slider-thumb {
    ${thumbStyle}
    transform:translateY(-15px)
  }
  &::-moz-range-thumb {
    ${thumbStyle}
    border:none;
  }
  &::-webkit-slider-runnable-track {
    ${trackStyle}
  }
  &::-moz-range-track {
    ${trackStyle}
  }
`;

type BigRangeSliderProps = InputHTMLAttributes<HTMLInputElement> & {
  unit?: string;
};

const BigRangeSlider: React.FC<BigRangeSliderProps> = (props) => {
  const { unit, ...rest } = props;
  return (
    <Wrapper>
      <Descriptor>
        {rest.value} {unit}
      </Descriptor>
      <Slider {...rest} type='range' />
    </Wrapper>
  );
};

export default BigRangeSlider;
