import React, { useState } from "react";
import axios from "axios";
import { DropDownMenu, FormFieldText, TransparentContainer } from "../layout";
import { COUNTRIES, STATES } from "../../utils/Constants";

export interface AddressForm {
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: number;
  city?: string;
  state?: string;
  country?: string;
  userId?: number;
}

export interface AddressFormErrors {
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  country?: string;
  userId?: number;
}

type Props = {
  handleFormChange: () => void;
};

const Address: React.FC<Props> = ({ handleFormChange }) => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: 0,
  });

  const [errors, setErrors] = useState<Partial<AddressFormErrors>>({});

  const handleChange = (name: string, value) => {
    if (name === "state" && value === "Not Applicable") {
      setAddressForm({ ...addressForm, state: "" });
    } else {
      setAddressForm({ ...addressForm, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const hasErrors = () => {
    const formErrors: Partial<AddressFormErrors> = {};
    if (!addressForm.addressLine1) {
      formErrors.addressLine1 = "Please enter a valid address";
    }
    if (!addressForm.city) {
      formErrors.city = "Please enter a valid city";
    }
    if (!addressForm.zipCode) {
      formErrors.zipCode = "Please enter a valid zip code";
    }
    if (!addressForm.state) {
      formErrors.state = "Please select a valid state";
    }
    if (!addressForm.country) {
      formErrors.country = "Please select a valid country";
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length) return true;
    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hasErrors()) {
      return;
    }
    const formData: Partial<AddressForm> = addressForm;
    formData.userId = 3;

    // eslint-disable-next-line
    console.log(addressForm);
    try {
      await axios.post("/address", addressForm);
      handleFormChange();
    } catch (error) {
      // eslint-disable-next-line
      console.error("Something went wrong", error);
    }
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
          errorMessage={errors.addressLine1}
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
          errorMessage={errors.city}
        />
        <DropDownMenu
          placeholder='-Some state in the DC Universe-'
          data={STATES}
          id='state'
          dataId='state'
          listName='State'
          value={addressForm.state}
          handleInput={handleChange}
          errorMessage={errors.state}
        />
        <DropDownMenu
          placeholder='-Some country in the DC Universe-'
          data={COUNTRIES}
          listName='Country'
          id='country'
          dataId='country'
          value={addressForm.country}
          handleInput={handleChange}
          errorMessage={errors.country}
        />
        <FormFieldText
          id='zipcode'
          dataId='zipCode'
          placeholder='6002318'
          label='Zip Code'
          value={addressForm.zipCode}
          onChange={handleChange}
          errorMessage={errors.zipCode}
        />
        <div className='flex flex-col items-end justify-center'>
          <button
            type='submit'
            className='submit-button text-[16px]'
            aria-label='Submit Personal Information'
            onSubmit={() => handleFormChange()}
          >
            Submit
          </button>
          <button type='button' className='pt-2 underline border-0 bg-none'>
            Skip
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Address;
