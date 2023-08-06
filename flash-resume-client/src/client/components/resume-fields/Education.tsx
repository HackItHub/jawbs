import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { DropDownMenu, FormFieldText } from "../layout";
import { MONTHS, COUNTRIES, STATES } from "../../utils/Constants";
import { School } from "../../utils/Interfaces";

const currentYear = new Date().getFullYear();
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

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
      monthStart: "",
      monthEnd: "",
      yearStart: currentYear - 4,
      yearEnd: currentYear,
    },
  ]);
  const [educationLevel, setEducationLevel] = useState<string>("");

  const handleChange = (name: string, value: any) => {
    setEducation({ ...education, [name]: value });
  };

  const handleEducationLevel = (__: any, value: string) => {
    setEducationLevel(value);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleEducationEntryChange = (
    name: string,
    value: any,
    index: number,
  ) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        diploma: "",
        monthStart: "",
        monthEnd: "",
        yearStart: currentYear - 4,
        yearEnd: currentYear,
      },
    ]);
  };

  const addEducation = (_, index: number) => {
    return (
      <div className='border-2 rounded-md border-solid border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
        <div className='rounded-md shadow-md '>
          <FormFieldText
            dataId='education'
            id={`eduction_${index}`}
            label='Name'
            placeholder='Princeton High'
            onChange={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <FormFieldText
            dataId='diploma'
            id={`diploma_${index}`}
            label='Diploma'
            placeholder='Diploma'
            onChange={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Start month'
              data={MONTHS}
              listName='Start month'
              dataId='monthStart'
              id={`monthStart_${index}`}
              handleInput={(name, value) =>
                handleEducationEntryChange(name, value, index)
              }
            />
            <DropDownMenu
              placeholder='End month'
              data={MONTHS}
              listName='End month'
              dataId='monthEnd'
              id={`monthEnd_${index}`}
              handleInput={(name, value) =>
                handleEducationEntryChange(name, value, index)
              }
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Start year'
              data={range(currentYear, currentYear - 60, -1)}
              listName='Start year'
              dataId='yearStart'
              id={`yearStart_${index}`}
              handleInput={(name, value) =>
                handleEducationEntryChange(name, value, index)
              }
            />
            <DropDownMenu
              placeholder='End year'
              data={range(currentYear, currentYear - 58, -1)}
              listName='End year'
              dataId='yearEnd'
              id={`yearEnd_${index}`}
              handleInput={(name, value) =>
                handleEducationEntryChange(name, value, index)
              }
            />
          </div>
          <FormFieldText
            dataId='addressLine1'
            id={`addressLine1_${index}`}
            placeholder='1007 Mountain Drive'
            label='Address Line 1'
            onChange={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <FormFieldText
            dataId='addressLine2'
            id={`addressLine2_${index}`}
            placeholder='Bat Cave Way'
            label='Address Line 2'
            onChange={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <FormFieldText
            id='city'
            dataId={`city_${index}`}
            placeholder='Gotham City'
            label='City'
            onChange={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <DropDownMenu
            placeholder='-Some state in the DC Universe-'
            data={STATES}
            id={`state_${index}`}
            dataId='state'
            listName='State'
            handleInput={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <DropDownMenu
            placeholder='-Some country in the DC Universe-'
            data={COUNTRIES}
            listName='Country'
            dataId='country'
            id={`country_${index}`}
            handleInput={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
          <FormFieldText
            id={`zipcode_${index}`}
            dataId='zipcode'
            placeholder='6002318'
            label='Zip Code'
            onChange={(name, value) =>
              handleEducationEntryChange(name, value, index)
            }
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <h3 className='flex justify-center items-center'>Education</h3>
      <form action='submit'>
        <DropDownMenu
          placeholder='Education Level'
          data={EDUCATION_LEVEL}
          listName='Highest level of education'
          dataId='educationLevel'
          id='educationLevel'
          handleInput={handleEducationLevel}
        />
        {education.map(addEducation)}
        <div className='border-2 rounded-md border-solid border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
          <button
            onClick={handleAddEducation}
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
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Education;
