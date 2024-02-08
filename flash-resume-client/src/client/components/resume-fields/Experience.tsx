import React, { useState } from "react";
import axios from "axios";
import { IoMdAddCircle } from "react-icons/io";
import { useAuthContext } from "../../contexts";
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
  startYear: number;
  endYear: number;
  address?: AddressForm;
}

type Props = {
  handleFormChange: () => void;
};

const Experience: React.FC<Props> = ({ handleFormChange }) => {
  const { currentUser } = useAuthContext();
  const [experience, setExperience] = useState<ExperienceEntries[]>([
    {
      experience: "",
      title: "",
      responsibilities: [],
      startMonth: "",
      endMonth: "",
      startYear: 0,
      endYear: 0,
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
        startYear: 0,
        endYear: 0,
      },
    ]);
  };

  const handleEntryChange = (name: string, value: any, index: number) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setExperience(updatedExperience);
  };

  const handleAddressChange = (name: string, value: any, index: number) => {
    const updatedExperience = [...experience];
    const addressedIndex = { ...updatedExperience[index].address };
    addressedIndex[name] = value;
    updatedExperience[index] = {
      ...updatedExperience[index],
      address: addressedIndex,
    };
    setExperience(updatedExperience);
  };

  const handleAddResponsibility = (index: number) => {
    const updatedExperienceWithResponsibilities = [...experience];
    updatedExperienceWithResponsibilities[index].responsibilities.push("");
    setExperience(updatedExperienceWithResponsibilities);
  };

  const handleResponsibilityChange = (
    value: any,
    parentIndex: number,
    index: number,
  ) => {
    const updatedExperience = [...experience];
    updatedExperience[parentIndex].responsibilities[index] = value;
    setExperience(updatedExperience);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const experienceFormData = {
      experiences: [...experience],
      userId: currentUser,
    };
    try {
      await axios.post("/experience", experienceFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleFormChange();
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
    }
  };

  const addEntry = (_: any, index: number) => {
    return (
      <div className='border-2 shadow-md rounded-md border-solid border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
        <div>
          <FormFieldText
            dataId='experience'
            id={`experience_${index}`}
            label='Company'
            placeholder='Wayne Inc.'
            onChange={(name, value) => handleEntryChange(name, value, index)}
            value={experience[index].experience}
          />
          <FormFieldText
            dataId='title'
            id={`title_${index}`}
            label='Title'
            placeholder='CTO'
            onChange={(name, value) => handleEntryChange(name, value, index)}
            value={experience[index].title}
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
              value={experience[index].startMonth}
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
              value={experience[index].endMonth}
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Start year'
              data={range(CURRENT_YEAR, CURRENT_YEAR - 60, -1)}
              listName='Start year'
              dataId='startYear'
              type='number'
              id={`start_Year${index}`}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
              value={experience[index].startYear}
            />
            <DropDownMenu
              placeholder='End year'
              data={range(CURRENT_YEAR, CURRENT_YEAR - 58, -1)}
              listName='End year'
              dataId='endYear'
              type='number'
              id={`endYear_${index}`}
              handleInput={(name, value) =>
                handleEntryChange(name, value, index)
              }
              value={experience[index].endYear}
            />
          </div>
          <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
            {experience[index].responsibilities.map((__, childIndex) => (
              <FormFieldText
                type='textarea'
                dataId='responsibility'
                id={`responsibility_${index}`}
                placeholder='Managed and directed multiple departments ensuring the best technologies and agencies for fighting crime.'
                label={`Experience ${childIndex + 1}`}
                onChange={(___, value) =>
                  handleResponsibilityChange(value, index, childIndex)
                }
                value={experience[index].responsibilities[childIndex]}
              />
            ))}
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
            </div>
          </div>
          <FormFieldText
            dataId='addressLine1'
            id={`addressLine1_${index}`}
            placeholder='1007 Mountain Drive'
            label='Address Line 1'
            onChange={(name, value) => handleAddressChange(name, value, index)}
            value={experience[index].address?.addressLine1}
          />
          <FormFieldText
            dataId='addressLine2'
            id={`addressLine2_${index}`}
            placeholder='Bat Cave Way'
            label='Address Line 2'
            onChange={(name, value) => handleAddressChange(name, value, index)}
            value={experience[index].address?.addressLine2}
          />
          <FormFieldText
            id={`city_${index}`}
            dataId='city'
            placeholder='Gotham City'
            label='City'
            onChange={(name, value) => handleAddressChange(name, value, index)}
            value={experience[index].address?.city}
          />
          <DropDownMenu
            placeholder='-Some state in the DC Universe-'
            data={STATES}
            id={`state_${index}`}
            dataId='state'
            listName='State'
            handleInput={(name, value) =>
              handleAddressChange(name, value, index)
            }
            value={experience[index].address?.state}
          />
          <DropDownMenu
            placeholder='-Some country in the DC Universe-'
            data={COUNTRIES}
            listName='Country'
            dataId='country'
            id={`country_${index}`}
            handleInput={(name, value) =>
              handleAddressChange(name, value, index)
            }
            value={experience[index].address?.country}
          />
          <FormFieldText
            id={`zipCode_${index}`}
            dataId='zipCode'
            type='numeric'
            placeholder='6002318'
            label='Zip Code'
            onChange={(name, value) => handleAddressChange(name, value, index)}
            value={experience[index].address?.zipCode}
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
          <button type='submit' className='submit-button'>
            Next
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Experience;
