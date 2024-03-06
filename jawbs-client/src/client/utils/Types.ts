export type Address = {
  id?: string;
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: number;
  city?: string;
  state?: string;
  country?: string;
};
export type Education = {
  educationLevel: string;
  create?: School[];
  schools: School[];
  id?: string;
  userId?: string;
};

export type School = {
  id?: string;
  name: string;
  diploma?: string;
  startYear: number;
  endYear?: number;
  startMonth: string;
  endMonth?: string;
  address: Address | null;
};

export type Experience = {
  id?: string;
  experience: string;
  title: string;
  responsibilities: string[];
  startMonth: string;
  endMonth?: string;
  startYear: number;
  endYear?: number;
};

export type Person = {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  summary: string;
};

export type User = {
  id: string;
  email: string;
  education: Education;
  address: Address;
  experience: Experience[];
  person: Person;
};

export type UserInfoType = {
  id?: string;
  email?: string;
  experience?: Experience[];
  education?: Education;
  address?: Address;
  person?: Person;
};
