import React, { useState } from "react";
import { DropDownMenu, FormFieldText } from "../layout";
import { COUNTRIES, STATES } from "../../utils/Constants";

interface AddressForm {
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state?: string;
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

  const handleChange = (name: string, value: any) => {
    if (name === "state" && value === "Not Applicable") {
      setAddressForm({ ...addressForm, state: "" });
    } else {
      setAddressForm({ ...addressForm, [name]: value });
    }
  };

  return (
    <form action='submit'>
      <FormFieldText
        id='address_line_1'
        placeholder='1007 Mountain Drive'
        label='Address Line 1'
        onChange={handleChange}
      />
      <FormFieldText
        id='address_line_2'
        placeholder='Bat Cave Way'
        label='Address Line 2'
        onChange={handleChange}
      />
      <FormFieldText
        id='city'
        placeholder='Gotham City'
        label='City'
        onChange={handleChange}
      />
      <div>
        <div className='form-input-container' role='presentation'>
          State
          <DropDownMenu
            placeholder='-Some state in the DC Universe-'
            data={STATES}
            listName='State'
            handleInput={handleChange}
          />
        </div>
      </div>
      <div>
        <div className='form-input-container' role='presentation'>
          Country
          <DropDownMenu
            placeholder='-Some country in the DC Universe-'
            data={COUNTRIES}
            listName='Country'
            handleInput={handleChange}
          />
        </div>
      </div>
      <FormFieldText
        id='zipcode'
        placeholder='6002318'
        label='Zip Code'
        onChange={handleChange}
      />
      <div className='flex justify-end'>
        <button
          type='submit'
          className='submit-button'
          aria-label='Submit Personal Information'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Address;
