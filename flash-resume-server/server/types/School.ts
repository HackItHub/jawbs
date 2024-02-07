import Address from "./Address";

type School = {
  create?: {
    school: string;
    diploma: string;
    startYear?: number;
    endYear?: number;
    startMonth?: string;
    endMonth?: string;
    address?: Address;
  };
  school?: string;
  diploma?: string;
  startYear?: number;
  endYear?: number;
  startMonth?: string;
  endMonth?: string;
  address?: Address;
};

export default School;
