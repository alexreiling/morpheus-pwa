import React, { FormEvent } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import { Formik } from 'formik';
import { spacing, colorMap } from '../config';
import { ButtonStyles } from '../components/common/Button';

const H_GAP = 10;
const Wrapper = styled.div`
  padding: ${spacing.page.hPaddingSmall};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${H_GAP}px;
  > * {
    padding-left: ${H_GAP}px;
  }
`;
const Label = styled.label`
  margin-bottom: 8px;
`;
const Input = styled.input`
  height: 48px;
  border: none;
  border-radius: 8px;
  background: ${colorMap.form.bg};
  padding: 0 8px;
`;
const InputWrapper = styled.div<{ flexBasis?: string }>`
  margin-top: 8px;
  flex-basis: ${(p) => p.flexBasis || '100%'};
  > * {
    display: block;
    width: 100%;
  }
`;
const Submit = styled.button`
  ${ButtonStyles}
  margin-top:8px;
`;

type AddContractPageProps = {};
const fields = [
  {
    label: 'First Name',
  },
  {
    label: 'Surname',
  },
  {
    label: 'Street',
    widthRatio: 0.75,
  },
  {
    label: 'No.',
    widthRatio: 0.25,
  },
  {
    label: 'ZIP',
    widthRatio: 0.25,
  },
  {
    label: 'City',
    widthRatio: 0.75,
  },
];
const AddContractPage: React.FC<AddContractPageProps> = (props) => {
  const handleSubmit = () => {
    console.log('submitted');

    alert('submitted');
  };
  return (
    <Wrapper>
      <Header title='Create Contract' hideUserFunctionality />
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {fields.map((field) => {
              const flexBasis = field.widthRatio
                ? field.widthRatio * 100 + '%'
                : undefined;
              return (
                <InputWrapper flexBasis={flexBasis}>
                  {field.label && <Label>{field.label}</Label>}
                  <Input></Input>
                </InputWrapper>
              );
            })}
            <InputWrapper>
              <Submit type='submit'>Save Contract</Submit>
            </InputWrapper>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default AddContractPage;
