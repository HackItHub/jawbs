export interface AddressForm {
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface School {
  school: string;
  monthStart: string;
  monthEnd?: string;
  yearStart: number;
  yearEnd?: number | string;
  diploma?: string;
  address?: AddressForm;
}
