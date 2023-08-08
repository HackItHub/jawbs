import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { DropDownMenu, FormFieldText, TransparentContainer } from "../layout";
import {
  MONTHS,
  COUNTRIES,
  STATES,
  CURRENT_YEAR,
  range,
} from "../../utils/Constants";

export interface AddressForm {
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

export interface School {
  school: string;
  startMonth: string;
  endMonth?: string;
  startYear: number;
  endYear?: number | string;
  diploma?: string;
  address?: AddressForm;
}

const EDUCATION_LEVEL = [
  "No formal education",
  "Less than high school",
  "High school",
  "Some college",
  "Bachelor's degree",
  "Graduate or professional degree",
  "Trade school or other",
];

const Education: React.FC = () => {
  const [education, setEducation] = useState<School[]>([
    {
      school: "",
      diploma: "",
      startMonth: "",
      endMonth: "",
      startYear: 0,
      endYear: 0,
    },
  ]);
  const [educationLevel, setEducationLevel] = useState<string>("");

  const handleEducationLevel = (__, value: string) => {
    setEducationLevel(value);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleEntryChange = (name: string, value, index: number) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setEducation(updatedEducation);
  };

  const handleAddEntry = () => {
    setEducation([
      ...education,
      {
        school: "",
        diploma: "",
        startMonth: "",
        endMonth: "",
        startYear: CURRENT_YEAR - 4,
        endYear: CURRENT_YEAR,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const addEntry = (_, index: number) => {
    return (
      <div className='border-2 shadow-md rounded-md border-solid border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
        <div>
          <FormFieldText
            dataId='school'
            id={`eduction_${index}`}
            label='Institution'
            placeholder='Princeton High'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            dataId='diploma'
            id={`diploma_${index}`}
            label='Diploma/Certificates'
            placeholder='Diploma'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Start month'
              data={MONTHS}
              listName='Start month'
              dataId='startMonth'
              id={`startMonth_${index}`}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
            />
            <DropDownMenu
              placeholder='End month'
              data={MONTHS}
              listName='End month'
              dataId='endMonth'
              id={`endMonth_${index}`}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Start year'
              data={range(CURRENT_YEAR, CURRENT_YEAR - 60, -1)}
              listName='Start year'
              dataId='startYear'
              id={`startYear_${index}`}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
            />
            <DropDownMenu
              placeholder='End year'
              data={range(CURRENT_YEAR, CURRENT_YEAR - 58, -1)}
              listName='End year'
              dataId='endYear'
              id={`endYear_${index}`}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
            />
          </div>
          <FormFieldText
            dataId='addressLine1'
            id={`addressLine1_${index}`}
            placeholder='1007 Mountain Drive'
            label='Address Line 1'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            dataId='addressLine2'
            id={`addressLine2_${index}`}
            placeholder='Bat Cave Way'
            label='Address Line 2'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            id='city'
            dataId={`city_${index}`}
            placeholder='Gotham City'
            label='City'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <DropDownMenu
            placeholder='-Some state in the DC Universe-'
            data={STATES}
            id={`state_${index}`}
            dataId='state'
            listName='State'
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
          <DropDownMenu
            placeholder='-Some country in the DC Universe-'
            data={COUNTRIES}
            listName='Country'
            dataId='country'
            id={`country_${index}`}
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            id={`zipcode_${index}`}
            dataId='zipcode'
            placeholder='6002318'
            label='Zip Code'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
        </div>
      </div>
    );
  };

  return (
    <TransparentContainer>
      <h3 className='flex justify-center items-center'>Education</h3>
      <form action='submit' onSubmit={handleSubmit}>
        <DropDownMenu
          placeholder='Education Level'
          data={EDUCATION_LEVEL}
          listName='Highest level of education'
          dataId='educationLevel'
          id='educationLevel'
          handleInput={handleEducationLevel}
        />
        {education.map(addEntry)}
        <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
          <button
            onClick={handleAddEntry}
            type='button'
            className='w-full py-4'
          >
            <div className='text-text-placeholder flex justify-center items-center gap-2'>
              Add Education
              <IoMdAddCircle />
            </div>
          </button>
        </div>
        <div className='flex justify-end items-center'>
          <button type='submit' className='submit-button'>
            Next
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Education;
