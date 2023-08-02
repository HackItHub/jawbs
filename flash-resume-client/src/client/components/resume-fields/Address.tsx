import React, { useState } from "react";
import FormFieldText from "../layout/FormFieldText";

interface AddressForm {
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

const Address: React.FC = () => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (name: string, value: string) => {
    setAddressForm({ ...addressForm, [name]: value });
  };

  return (
    <form>
      <FormFieldText
        id='address_line_1'
        placeholder='1007 Mountain Drive'
        label='Address Line 1'
        onChange={handleChange}
        required={false}
      />
      <FormFieldText
        id='address_line_2'
        placeholder=''
        label='Address Line 2'
        onChange={handleChange}
        required={false}
      />
      <FormFieldText
        id='city'
        placeholder='Gotham City'
        label='City'
        onChange={handleChange}
        required={false}
      />
      <FormFieldText
        id='state'
        placeholder='New Jersey'
        label='State'
        onChange={handleChange}
        required={false}
      />
      <FormFieldText
        id='country'
        placeholder='United States'
        label='Country'
        onChange={handleChange}
        required={false}
      />
      <FormFieldText
        id='zipcode'
        placeholder='6002318'
        label='Zip Code'
        onChange={handleChange}
        required={false}
      />
    </form>
  );
};

export default Address;
