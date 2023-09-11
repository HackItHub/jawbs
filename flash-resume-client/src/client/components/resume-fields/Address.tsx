import React, { useState } from "react";
import { DropDownMenu, FormFieldText, TransparentContainer } from "../layout";
import { COUNTRIES, STATES } from "../../utils/Constants";

export interface AddressForm {
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  country?: string;
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

  const handleChange = (name: string, value) => {
    if (name === "state" && value === "Not Applicable") {
      setAddressForm({ ...addressForm, state: "" });
    } else {
      setAddressForm({ ...addressForm, [name]: value });
    }
  };

  return (
    <TransparentContainer>
      <h2 className='form-title'>Address</h2>
      <form action='submit'>
        <FormFieldText
          id='addressLine1'
          dataId='addressLine1'
          placeholder='1007 Mountain Drive'
          label='Address Line 1'
          onChange={handleChange}
        />
        <FormFieldText
          id='addressLine2'
          dataId='addressLine2'
          placeholder='Bat Cave Way'
          label='Address Line 2'
          onChange={handleChange}
        />
        <FormFieldText
          id='city'
          dataId='city'
          placeholder='Gotham City'
          label='City'
          onChange={handleChange}
        />
        <DropDownMenu
          placeholder='-Some state in the DC Universe-'
          data={STATES}
          id='state'
          dataId='state'
          listName='State'
          handleInput={handleChange}
        />
        <DropDownMenu
          placeholder='-Some country in the DC Universe-'
          data={COUNTRIES}
          listName='Country'
          id='country'
          dataId='country'
          handleInput={handleChange}
        />
        <FormFieldText
          id='zipcode'
          dataId='zipcode'
          placeholder='6002318'
          label='Zip Code'
          onChange={handleChange}
        />
        <div className='flex justify-end'>
          <button
            type='submit'
            className='submit-button text-[16px]'
            aria-label='Submit Personal Information'
          >
            Submit
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Address;
