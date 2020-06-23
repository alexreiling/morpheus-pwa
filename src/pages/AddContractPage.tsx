import React, { FormEvent, useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import { Formik } from 'formik';
import { spacing, colorMap } from '../config';
import { ButtonStyles } from '../components/common/Button';
import BasicForm from '../components/common/BasicForm';
import UserContext from '../contexts/UserContext';

const Wrapper = styled.div`
  padding: ${spacing.page.hPaddingSmall};
`;

type AddContractPageProps = {};

const AddContractPage: React.FC<AddContractPageProps> = (props) => {
  const { user } = useContext(UserContext);
  const personal = user?.personal;
  const fields = {
    firstName: {
      label: 'First Name',
      initValue: personal?.firstName,
    },
    lastName: {
      label: 'Surname',
      initValue: personal?.lastName,
    },
    street: {
      label: 'Street',
      widthRatio: 0.75,
      initValue: personal?.address?.street,
    },
    nr: {
      label: 'No.',
      widthRatio: 0.25,
      initValue: personal?.address?.nr,
    },
    zipCode: {
      label: 'ZIP',
      widthRatio: 0.25,
      initValue: personal?.address?.zipCode?.toString(),
    },
    city: {
      label: 'City',
      widthRatio: 0.75,
      initValue: personal?.address?.city,
    },
  };
  return (
    <Wrapper>
      <Header title='Create Contract' hideUserFunctionality />
      <BasicForm fields={fields} onSubmit={(data) => console.log(data)} />
    </Wrapper>
  );
};

export default AddContractPage;
