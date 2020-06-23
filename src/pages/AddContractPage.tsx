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
  const fields = {
    firstName: {
      label: 'First Name',
      initValue: user?.firstName,
    },
    lastName: {
      label: 'Surname',
      initValue: user?.lastName,
    },
    street: {
      label: 'Street',
      widthRatio: 0.75,
      initValue: user?.address?.street,
    },
    nr: {
      label: 'No.',
      widthRatio: 0.25,
      initValue: user?.address?.nr,
    },
    zipCode: {
      label: 'ZIP',
      widthRatio: 0.25,
      initValue: user?.address?.zipCode.toString(),
    },
    city: {
      label: 'City',
      widthRatio: 0.75,
      initValue: user?.address?.city,
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
