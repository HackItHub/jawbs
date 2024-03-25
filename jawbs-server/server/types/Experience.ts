import Address from "./Address";

type Experience = {
  id?: string;
  userId?: string;
  experience: string;
  title: string;
  responsibilities: string[];
  startYear: number;
  endYear: number;
  startMonth: string;
  endMonth: string;
  address?: Address;
  create?: {
    experience: string;
    title: string;
    responsibilities: string[];
    startYear: number;
    endYear: number;
    startMonth: string;
    endMonth: string;
  };
};

export default Experience;
