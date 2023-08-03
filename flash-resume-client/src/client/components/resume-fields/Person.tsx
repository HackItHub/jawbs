import React, { useState } from "react";
import FormFieldText from "../layout/FormFieldText";

interface Personal {
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber: string;
  email: string;
}

const REQUIRED = true;
const NO_REQUIRED = false;

const Person: React.FC = () => {
  const [person, setPerson] = useState<Personal>({
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
  });
  const handleChange = (name: string, value: string) => {
    setPerson({ ...person, [name]: value });
  };

  return (
    <form>
      <FormFieldText
        id='first_name'
        placeholder='Bruce'
        label='First Name'
        onChange={handleChange}
        required={REQUIRED}
      />
      <FormFieldText
        id='middle_name'
        placeholder='Thomas'
        label='Middle Name'
        onChange={handleChange}
        required={NO_REQUIRED}
      />
      <FormFieldText
        id='last_name'
        placeholder='Wayne'
        label='Last Name'
        onChange={handleChange}
        required={REQUIRED}
      />
      <FormFieldText
        id='phone_number'
        placeholder='1-800-BATMAN'
        label='Phone Number'
        onChange={handleChange}
        required={REQUIRED}
      />
      <FormFieldText
        id='email'
        placeholder='definitelynotbatman@waynecorp.org'
        label='Email'
        onChange={handleChange}
        required={REQUIRED}
      />
    </form>
  );
};

export default Person;
