import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TransparentContainer, FormFieldText, DropDownMenu } from "../layout";
import {
  MONTHS,
  COUNTRIES,
  STATES,
  CURRENT_YEAR,
  range,
} from "../../utils/Constants";

interface AddressForm {
  addressLine1?: string;
  addressLine2?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  country?: string;
}
interface ExperienceEntries {
  experience: string;
  title: string;
  responsibilities: string[];
  startMonth: string;
  endMonth: string;
  startYear: number | null;
  endYear: number | null;
  address?: AddressForm;
}

type Props = {
  handleFormChange: () => void;
};

const Experience: React.FC<Props> = ({ handleFormChange }) => {
  const [experience, setExperience] = useState<ExperienceEntries[]>([
    {
      experience: "",
      title: "",
      responsibilities: [],
      startMonth: "",
      endMonth: "",
      startYear: null,
      endYear: null,
    },
  ]);
  const handleAddEntry = () => {
    setExperience([
      ...experience,
      {
        experience: "",
        title: "",
        responsibilities: [],
        startMonth: "",
        endMonth: "",
        startYear: null,
        endYear: null,
      },
    ]);
  };

  const handleEntryChange = (name: string, value, index: number) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setExperience(updatedExperience);
  };

  const handleAddResponsibility = (index) => {
    const updatedExperienceWithResponsibilities = [...experience];
    updatedExperienceWithResponsibilities[index].responsibilities.push("");
    setExperience(updatedExperienceWithResponsibilities);
  };

  const handleResponsibilityChange = (value, parentIndex, index) => {
    const updatedExperience = [...experience];
    updatedExperience[parentIndex].responsibilities[index] = value;
    setExperience(updatedExperience);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  eslint-disable-next-line
    console.log(experience);
  };

  const addEntry = (_, index: number) => {
    return (
      <div className='border-2 shadow-md rounded-md border-solid border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
        <div>
          <FormFieldText
            dataId='experience'
            id={`experience_${index}`}
            label='Company'
            placeholder='Wayne Inc.'
            onChange={(name, value) => handleEntryChange(name, value, index)}
          />
          <FormFieldText
            dataId='title'
            id={`title_${index}`}
            label='Title'
            placeholder='CTO'
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
              id={`start_Year${index}`}
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
          <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
            <button
              type='button'
              className='w-full py-4'
              onClick={() => handleAddResponsibility(index)}
            >
              <div className='text-text-placeholder flex justify-center items-center gap-2'>
                Add Responsibility
                <IoMdAddCircle />
              </div>
            </button>
            {experience[index].responsibilities.map((__, childIndex) => (
              <FormFieldText
                type='textarea'
                dataId='responsibility'
                id={`responsibility_${index}`}
                placeholder='Managed and directed multiple departments ensuring the best technologies and agencies for fighting crime.'
                label={`Experience ${childIndex}`}
                onChange={(___, value) =>
                  handleResponsibilityChange(value, index, childIndex)
                }
              />
            ))}
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
      <h3 className='form-title'>Experience</h3>
      <form action='submit' onSubmit={handleSubmit}>
        {experience.map(addEntry)}
        <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
          <button
            type='button'
            className='w-full py-4'
            onClick={handleAddEntry}
          >
            <div className='text-text-placeholder flex justify-center items-center gap-2'>
              Add Experience
              <IoMdAddCircle />
            </div>
          </button>
        </div>
        <div className='flex justify-end items-center'>
          <button
            type='submit'
            className='submit-button'
            onSubmit={() => handleFormChange}
          >
            Next
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Experience;
