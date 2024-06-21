/* eslint-disable no-unused-vars */
export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum UserRole {
  ADMIN = "admin",
  CLIENT = "client",
  COACH = "coach",
  OFFICE_EMPLOYEE = "office_employee",
  OTHER = "other",
}

export interface User {
  userId: string;
  email: string;
  username: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: Date;
  phoneNumber: string;
  profilePictureUrl: string;
  additionalInfo: string;
}
