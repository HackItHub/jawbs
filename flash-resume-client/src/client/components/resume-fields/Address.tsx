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

type Props = {
  handleFormChange: () => void;
};

const Address: React.FC<Props> = ({ handleFormChange }) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormChange();
  };

  return (
    <TransparentContainer>
      <h2 className='form-title'>Address</h2>
      <form action='submit' onSubmit={handleSubmit}>
        <FormFieldText
          id='addressLine1'
          dataId='addressLine1'
          placeholder='1007 Mountain Drive'
          label='Address Line 1'
          value={addressForm.addressLine1}
          onChange={handleChange}
        />
        <FormFieldText
          id='addressLine2'
          dataId='addressLine2'
          placeholder='Bat Cave Way'
          label='Address Line 2'
          value={addressForm.addressLine2}
          onChange={handleChange}
        />
        <FormFieldText
          id='city'
          dataId='city'
          placeholder='Gotham City'
          value={addressForm.city}
          label='City'
          onChange={handleChange}
        />
        <DropDownMenu
          placeholder='-Some state in the DC Universe-'
          data={STATES}
          id='state'
          dataId='state'
          listName='State'
          value={addressForm.state}
          handleInput={handleChange}
        />
        <DropDownMenu
          placeholder='-Some country in the DC Universe-'
          data={COUNTRIES}
          listName='Country'
          id='country'
          dataId='country'
          value={addressForm.country}
          handleInput={handleChange}
        />
        <FormFieldText
          id='zipcode'
          dataId='zipCode'
          placeholder='6002318'
          label='Zip Code'
          value={addressForm.zipCode}
          onChange={handleChange}
        />
        <div className='flex justify-end'>
          <button
            type='submit'
            className='submit-button text-[16px]'
            aria-label='Submit Personal Information'
            onSubmit={() => handleFormChange()}
          >
            Submit
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Address;
