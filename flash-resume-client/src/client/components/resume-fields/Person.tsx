import React, { useState } from "react";
import FormFieldText from "../layout/FormFieldText";
import { REQUIRED } from "../../utils/Constants";
import { TransparentContainer } from "../layout";

interface Personal {
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber: string;
  email: string;
}

const Person: React.FC = () => {
  const [person, setPerson] = useState<Personal>({
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (name: string, value) => {
    setPerson({ ...person, [name]: value });
  };

  return (
    <TransparentContainer>
      <h3> Personal Information </h3>
      <form action='submit'>
        <FormFieldText
          id='firstName'
          dataId='firstName'
          placeholder='Bruce'
          label='First Name'
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='middleName'
          dataId='middleName'
          placeholder='Thomas'
          label='Middle Name'
          onChange={handleChange}
        />
        <FormFieldText
          id='lastName'
          dataId='lastName'
          placeholder='Wayne'
          label='Last Name'
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='phoneNumber'
          dataId='phoneNumber'
          placeholder='1-800-BATMAN'
          label='Phone Number'
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='email'
          dataId='email'
          placeholder='definitelynotbatman@waynecorp.org'
          label='Email'
          onChange={handleChange}
          isRequired={REQUIRED}
          type='email'
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
    </TransparentContainer>
  );
};

export default Person;
