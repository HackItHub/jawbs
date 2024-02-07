import Address from "./Address";

type School = {
  create?: {
    name: string;
    diploma: string;
    startYear?: number;
    endYear?: number;
    startMonth?: string;
    endMonth?: string;
    address?: Address;
  };
  name?: string;
  diploma?: string;
  startYear?: number;
  endYear?: number;
  startMonth?: string;
  endMonth?: string;
  address?: Address;
};

export default School;
