export type Locale = {
  id: string;
  displayName: string;
};
export interface LoginData {
  email: string;
  password: string;
}
export interface RegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface AddressData {
  street: string;
  nr: string;
  zipCode: number;
  city: string;
  country: string;
}
export interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: AddressData;
}
