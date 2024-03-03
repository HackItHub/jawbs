import React, { useState } from "react";
import axios from "axios";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import FormFieldText from "../forms/FormFieldText";
import { TransparentContainer } from "../layout";
import { useAuthContext } from "../../contexts";

interface Personal {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
  email: string;
  summary: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

type Props = {
  handleFormChange: () => void;
};

const PersonForm: React.FC<Props> = ({ handleFormChange }) => {
  const { setToken } = useAuthContext();
  const [person, setPerson] = useState<Partial<Personal>>({});

  const [errors, setErrors] = useState<Partial<FormErrors>>({});

  const handleChange = (name: string, value) => {
    setErrors({ ...errors, [name]: "" });
    setPerson({ ...person, [name]: value });
  };

  const hasErrors = () => {
    const formErrors: Partial<FormErrors> = {};
    if (!person.firstName) formErrors.firstName = "First Name is required";
    if (!person.lastName) formErrors.lastName = "Last Name is required";
    if (!person.phone) formErrors.phone = "Phone is required";
    if (person.phone && !isPossiblePhoneNumber(person.phone))
      formErrors.phone = "Invalid Phone Number";
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
      const response = await axios.post("/api/users", person);
      // eslint-disable-next-line
      setToken(response.data);

      handleFormChange();
    } catch (err) {
      // eslint-disable-next-line
      console.error("something went wrong", err);
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
          errorMessage={errors.firstName}
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
          errorMessage={errors.lastName}
        />
        <FormFieldText
          id='phone'
          dataId='phone'
          placeholder='1-800-BATMAN'
          label='Phone'
          type='tel'
          value={person.phone}
          onChange={handleChange}
          errorMessage={errors.phone}
        />
        <FormFieldText
          id='email'
          dataId='email'
          placeholder='definitelynotbatman@waynecorp.org'
          label='Email'
          onChange={handleChange}
          value={person.email}
          type='email'
          errorMessage={errors.lastName}
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

export default PersonForm;
