import Address from "./Address";

interface School {
  name?: string;
  diploma?: string;
  startYear?: number;
  endYear?: number;
  startMonth?: string;
  endMonth?: string;
  address?: Address;
}

export default School;
