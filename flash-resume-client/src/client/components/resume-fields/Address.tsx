import React, { useState } from "react";
import axios from "axios";
import FormFieldText from "../layout/FormFieldText";
import DropDownMenu from "../layout/DropDownMenu";

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
  const [countryList, setCountryList] = useState<any>([]);

  const handleChange = (name: string, value: string) => {
    setAddressForm({ ...addressForm, [name]: value });
  };

  const handleCountryClick = () => {
    if (countryList.length < 1) {
      axios
        .get("https://restcountries.com/v3.1/all?fields=name")
        .then((res) => {
          const { data } = res;
          const countryNames = [];
          for (let i = 0; i < data.length; i++) {
            countryNames.push(data[i].name.official);
          }
          return countryNames;
        })
        .then((countries) => setCountryList(countries));
    }
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
      <div>
        <div
          className='form-input-container'
          onClick={handleCountryClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleCountryClick();
            }
          }}
          role='presentation'
        >
          Countries
          <DropDownMenu
            placeholder='Unite States'
            data={countryList}
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
        required={false}
      />
    </form>
  );
};

export default Address;
