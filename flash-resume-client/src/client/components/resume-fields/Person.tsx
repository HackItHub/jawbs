import React, { useState } from "react";
import axios from "axios";
import FormFieldText from "../layout/FormFieldText";
import { REQUIRED } from "../../utils/Constants";
import { TransparentContainer } from "../layout";

interface Personal {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
  email: string;
  summary: string;
}

type Props = {
  handleFormChange: () => void;
};

const Person: React.FC<Props> = ({ handleFormChange }) => {
  const [person, setPerson] = useState<Personal>({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    summary: "",
  });

  const [errors, setErrors] = useState<Partial<Personal>>({});

  const handleChange = (name: string, value) => {
    setErrors({ ...errors, [name]: "" });
    setPerson({ ...person, [name]: value });
  };

  const hasErrors = () => {
    const formErrors: Partial<Personal> = {};
    if (!person.firstName) formErrors.firstName = "First Name is required";
    if (!person.lastName) formErrors.lastName = "Last Name is required";
    if (!person.phone) formErrors.phone = "Phone is required";
    if (!person.email) formErrors.email = "Email is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (hasErrors()) {
      return;
    }

    try {
      await axios.post("/users", person);
      handleFormChange();
    } catch {
      // eslint-disable-next-line
      console.log("something went wrong");
    }
  };

  return (
    <TransparentContainer>
      <h3 className='form-title'>Personal Information</h3>
      <form action='submit' onSubmit={handleSubmit}>
        <FormFieldText
          id='firstName'
          dataId='firstName'
          placeholder='Bruce'
          label='First Name'
          onChange={handleChange}
          value={person.firstName}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='middleName'
          dataId='middleName'
          placeholder='Thomas'
          label='Middle Name'
          value={person.middleName}
          onChange={handleChange}
        />
        <FormFieldText
          id='lastName'
          dataId='lastName'
          placeholder='Wayne'
          label='Last Name'
          value={person.lastName}
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='phone'
          dataId='phone'
          placeholder='1-800-BATMAN'
          label='Phone'
          value={person.phone}
          onChange={handleChange}
          isRequired={REQUIRED}
        />
        <FormFieldText
          id='email'
          dataId='email'
          placeholder='definitelynotbatman@waynecorp.org'
          label='Email'
          onChange={handleChange}
          value={person.email}
          isRequired={REQUIRED}
          type='email'
        />
        <FormFieldText
          id='summary'
          dataId='summary'
          placeholder='Billionaire playboy philanthropist'
          label='Summary'
          onChange={handleChange}
          value={person.summary}
          type='textarea'
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

export default Person;
