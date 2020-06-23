import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Summary from '../components/common/Summary';
import UserContext from '../contexts/UserContext';
import Header from '../components/common/Header';
import { AddressData } from '../types';
import BasicForm, { BasicFormField } from '../components/common/BasicForm';
import Button from '../components/common/Button';
import PageTitle from '../components/common/PageTitle';

const Wrapper = styled.div`
  padding: 24px;
`;

const CancelButton = styled(Button)`
  margin-top: 16px;
`;

type AccountPageProps = {};
const stringifyAddress = (addressData?: AddressData) => {
  if (!addressData) return '';
  const {
    city = '',
    country = '',
    nr = '',
    street = '',
    zipCode = '',
  } = addressData;
  return `${street} ${nr}, ${zipCode} ${city}, ${country}`;
};
const createForm = (data: any, filterFields: string[] = []) => {
  let fields: { [key: string]: BasicFormField } = {};
  Object.keys(data)
    .filter((key) => !filterFields.includes(key))
    .forEach((key) => {
      const { label, value, widthRatio } = data[key];
      fields[key] = {
        label,
        widthRatio,
        initValue: value,
      };
    });
  return fields;
};
const createSummary = (data: any, filterFields: string[] = []) => {
  return Object.keys(data)
    .filter((key) => !filterFields.includes(key))
    .map((key) => {
      const { label, value } = data[key];
      return { label, value };
    });
};
const AccountPage: React.FC<AccountPageProps> = (props) => {
  const { user, updateUserData } = useContext(UserContext);
  const [editedSection, setEditedSection] = useState<any>(undefined);
  const sections = [
    {
      label: 'Personal Data',
      fields: {
        firstName: { label: 'First Name', value: user?.firstName },
        lastName: { label: 'Last Name', value: user?.lastName },
        dateOfBirth: { label: 'Date of Birth', value: user!.dateOfBirth },
        address: { label: 'Address', value: stringifyAddress(user?.address) },
        street: {
          label: 'Street',
          value: user?.address?.street,
          widthRatio: 0.75,
        },
        nr: { label: 'Nr.', value: user?.address?.nr, widthRatio: 0.25 },
        zipCode: {
          label: 'Zip Code',
          value: user?.address?.zipCode,
          widthRatio: 0.4,
        },

        city: { label: 'City', value: user?.address?.city, widthRatio: 0.6 },
        country: { label: 'Country', value: user?.address?.country },
      },
      summaryFilter: ['street', 'nr', 'city', 'zipCode', 'country'],
      formFilter: ['address'],
      handleSubmit: async (data: any) => {
        const { street, nr, zipCode, city, country, ...rest } = data;
        return updateUserData!({
          ...rest,
          address: { street, nr, zipCode, city, country },
        });
      },
    },
  ];
  return (
    <Wrapper>
      {!editedSection ? (
        <>
          <Header title='My Account' />
          {sections.map((s) => (
            <Summary
              name={s.label}
              onEdit={() => setEditedSection(s)}
              items={createSummary(s.fields, s.summaryFilter)}
            />
          ))}
        </>
      ) : (
        <>
          <PageTitle>{`Edit: ${editedSection.label}`}</PageTitle>
          <BasicForm
            fields={createForm(editedSection.fields, editedSection.formFilter)}
            onSubmit={async (data) => {
              await editedSection.handleSubmit(data);
              setEditedSection(undefined);
            }}
            submitLabel='Save'
          />
          <CancelButton cancelStyle onClick={() => setEditedSection(undefined)}>
            Cancel
          </CancelButton>
        </>
      )}
    </Wrapper>
  );
};

export default AccountPage;
