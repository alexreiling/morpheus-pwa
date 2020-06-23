import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { ButtonStyles } from './Button';
import { colorMap } from '../../config';

const H_GAP = 10;

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
export interface BasicFormField {
  label: string;
  widthRatio?: number;
  initValue?: string;
}
type BasicFormProps = {
  fields: {
    [key: string]: BasicFormField;
  };
  onSubmit?: (data: any) => any;
  submitLabel?: string;
};

const BasicForm: React.FC<BasicFormProps> = (props) => {
  const { onSubmit, fields, submitLabel } = props;
  let initValues: any = {};
  Object.keys(fields).forEach(
    (name) => (initValues[name] = fields[name].initValue)
  );
  const [data, setData] = useState(initValues);
  const handleSubmit = () => {
    console.log('submitted');
    if (onSubmit) onSubmit(data);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {Object.keys(fields).map((name) => {
            const field = fields[name];
            const flexBasis = field.widthRatio
              ? field.widthRatio * 100 + '%'
              : undefined;
            return (
              <InputWrapper key={name} flexBasis={flexBasis}>
                {field.label && <Label>{field.label}</Label>}
                <Input name={name} value={data[name]} onChange={handleChange} />
              </InputWrapper>
            );
          })}
          <InputWrapper>
            <Submit type='submit'>{submitLabel || 'Save'}</Submit>
          </InputWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;
