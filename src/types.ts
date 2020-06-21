export type Locale = {
  id: string;
  displayName: string;
};
export interface LoginData {
  email: string;
  password: string;
}
export interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
