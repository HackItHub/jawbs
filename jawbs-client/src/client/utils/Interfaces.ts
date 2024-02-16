export interface Address {
  id: string;
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: number;
  city?: string;
  state?: string;
  country?: string;
}
export interface Education {
  educationLevel: string;
  create?: School[];
  school?: School[];
  id?: string;
}

export interface School {
  id?: string;
  name?: string;
  diploma?: string;
  startYear?: number;
  endYear?: number;
  startMonth?: string;
  endMonth?: string;
  address?: Address;
}

export interface Experience {
  id?: string;
  title?: string;
  responsibilities?: string[];
  startMonth?: string;
  endMonth?: string;
  startYear?: number;
  endYear?: number;
}

export interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  summary: string;
}

export interface User {
  id: string;
  email: string;
  education: Education[];
  address: Address;
  experience: Experience[];
  person: Person;
}
