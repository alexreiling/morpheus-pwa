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
export interface PersonalData {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  address?: AddressData;
}
export interface UserFlags {
  profileCompletionPending?: boolean;
}
export interface User {
  username: string;
  personal: PersonalData;
  userFlags: UserFlags;
}
