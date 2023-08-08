import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TransparentContainer, FormFieldText, DropDownMenu } from "../layout";

interface ExperienceEntries {
  experience: string;
  title: string;
  responsibilities: string[] | null;
  startMonth: string;
  endMonth: string;
  startYear: number;
  endYear: number;
}
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
            dataId='monthStart'
            id={`monthStart_${index}`}
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
          <DropDownMenu
            placeholder='End month'
            data={MONTHS}
            listName='End month'
            dataId='monthEnd'
            id={`monthEnd_${index}`}
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
        </div>
        <div className='flex w-full justify-between items-center gap-4'>
          <DropDownMenu
            placeholder='Start year'
            data={range(currentYear, currentYear - 60, -1)}
            listName='Start year'
            dataId='yearStart'
            id={`yearStart_${index}`}
            handleInput={(name, value) => handleEntryChange(name, value, index)}
          />
          <DropDownMenu
            placeholder='End year'
            data={range(currentYear, currentYear - 58, -1)}
            listName='End year'
            dataId='yearEnd'
            id={`yearEnd_${index}`}
            handleInput={(name, value) => handleEntryChange(name, value, index)}
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

const Experience: React.FC = () => {
  return (
    <TransparentContainer>
      <h3 className='flex justify-center items-center'>Experience</h3>
      <form action='submit'>
        <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2'>
          <button type='button' className='w-full py-4'>
            <div className='text-text-placeholder flex justify-center items-center gap-2'>
              Add Experience
              <IoMdAddCircle />
            </div>
          </button>
        </div>
      </form>
    </TransparentContainer>
  );
};

export default Experience;
