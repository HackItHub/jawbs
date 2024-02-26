interface Address {
  create?: {
    addressLine1?: string;
    addressLine2?: string;
    zipCode?: number;
    city?: string;
    country?: string;
    state?: string;
  };
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: number;
  city?: string;
  country?: string;
  state?: string;
}

export default Address;
