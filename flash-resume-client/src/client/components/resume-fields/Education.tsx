import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { BsTrashFill } from "react-icons/bs";
import { DropDownMenu, FormFieldText, TransparentContainer } from "../layout";
import {
  MONTHS,
  COUNTRIES,
  STATES,
  CURRENT_YEAR,
  range,
} from "../../utils/Constants";

export interface AddressForm {
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface School {
  school: string;
  startMonth: string;
  endMonth?: string;
  startYear: number | string;
  endYear?: number | string;
  diploma?: string;
  address: AddressForm;
}

type Props = {
  handleFormChange: () => void;
};

const EDUCATION_LEVEL = [
  "No formal education",
  "Less than high school",
  "High school",
  "Some college",
  "Bachelor's degree",
  "Graduate or professional degree",
  "Trade school or other",
];

const removeEducationStyle = {
  color: "#E42217",
  width: "20px",
  height: "20px",
};

const Education: React.FC<Props> = ({ handleFormChange }) => {
  const [education, setEducation] = useState<School[]>([
    {
      school: "",
      diploma: "",
      startMonth: "",
      endMonth: "",
      startYear: 0,
      endYear: 0,
      address: {
        addressLine1: "",
        addressLine2: "",
        zipCode: "",
        city: "",
        state: "",
        country: "",
      },
    },
  ]);
  const [educationLevel, setEducationLevel] = useState<string>("");

  const handleEducationLevel = (value: string) => {
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
        startYear: 0,
        endYear: 0,
        address: {
          addressLine1: "",
          addressLine2: "",
          zipCode: "",
          city: "",
          state: "",
          country: "",
        },
      },
    ]);
  };

  const handleRemoveEducationKeyDown = (event: React.KeyboardEvent, index) => {
    if (event.key === "Enter" || event.key === " ") {
      handleRemoveEducation(index);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const addEntry = (_, index: number) => {
    return (
      <div className='border-2 shadow-md relative rounded-md border-solid border-text-placeholder border-opacity-30 w-full px-4 py-3 mb-2'>
        <div
          className='absolute top-[10px] right-[10px] z-10'
          onClick={() => handleRemoveEducation(index)}
          onKeyDown={(e) => handleRemoveEducationKeyDown(e, index)}
          role='button'
          tabIndex={0}
        >
          <BsTrashFill style={removeEducationStyle} />
        </div>
        <div>
          <FormFieldText
            dataId='school'
            id={`eduction_${index}`}
            label='Institution'
            placeholder='Princeton High'
            value={education[index].school}
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            dataId='diploma'
            id={`diploma_${index}`}
            label='Diploma/Certificates'
            placeholder='Diploma'
            value={education[index].diploma}
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Start month'
              data={MONTHS}
              listName='Start month'
              dataId='startMonth'
              value={education[index].startMonth}
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
              value={education[index].endMonth}
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
              value={education[index].startYear}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
            />
            <DropDownMenu
              placeholder='End year'
              data={range(CURRENT_YEAR, CURRENT_YEAR - 58, -1)}
              listName='End year'
              dataId='endYear'
              value={education[index].endYear}
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
            value={education[index].address.addressLine1}
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            dataId='addressLine2'
            id={`addressLine2_${index}`}
            value={education[index].address.addressLine2}
            placeholder='Bat Cave Way'
            label='Address Line 2'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            id='city'
            dataId={`city_${index}`}
            placeholder='Gotham City'
            label='City'
            value={education[index].address.city}
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <DropDownMenu
            placeholder='-Some state in the DC Universe-'
            data={STATES}
            id={`state_${index}`}
            dataId='state'
            value={education[index].address.state}
            listName='State'
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
          <DropDownMenu
            placeholder='-Some country in the DC Universe-'
            data={COUNTRIES}
            listName='Country'
            dataId='country'
            value={education[index].address.country}
            id={`country_${index}`}
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            id={`zipcode_${index}`}
            dataId='zipcode'
            placeholder='6002318'
            label='Zip Code'
            value={education[index].address.zipCode}
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
        </div>
      </div>
    );
  };

  return (
    <TransparentContainer>
      <h3 className='form-title'>Education</h3>
      <form action='submit' onSubmit={handleSubmit}>
        <DropDownMenu
          placeholder='Education Level'
          data={EDUCATION_LEVEL}
          listName='Highest level of education'
          dataId='educationLevel'
          id='educationLevel'
          value={educationLevel}
          handleInput={(_, value) => handleEducationLevel(value)}
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
          <button
            type='submit'
            className='submit-button'
            onSubmit={() => handleFormChange()}
          >
            Next
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Education;
