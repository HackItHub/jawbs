import React, { useState } from "react";
import { DropDownMenu, FormFieldText } from "../layout";
import { MONTHS } from "../../utils/Constants";

interface EducationEntries {
  highestLevelOfEducation: string;
  highschool?: string;
  highschoolDiploma?: string;
  college?: string;
  collegeDiploma?: string;
  graduateSchool?: string;
  graduateDegree?: string;
  tradeSchool?: string;
  certificates?: string;
  highSchoolStartYear?: number;
  highSchoolEndYear?: string;
  highSchoolStartMonth?: string;
  highSchoolEndMonth?: string;
  collegeStartYear?: number;
  collegeEndYear?: string;
  collegeStartMonth?: string;
  collegeEndMonth?: string;
  tradeSchoolStartYear?: number;
  tradeSchoolEndYear?: string;
  tradeSchoolStartMonth?: string;
  tradeSchoolEndMonth?: string;
}

const currentYear = new Date().getFullYear();
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const EDUCATION_LEVEL = [
  "No formal education",
  "Less than high school",
  "High School",
  "Some college",
  "Bachelor's degree",
  "Graduate or professional degree",
  "Trade School or Other",
];

const Education: React.FC = () => {
  const [education, setEducation] = useState<EducationEntries>({
    highestLevelOfEducation: "",
  });

  const handleChange = (name: string, value: any) => {
    setEducation({ ...education, [name]: value });
  };

  let component;

  switch (education.highestLevelOfEducation) {
    case "High School":
      component = (
        <>
          <FormFieldText
            id='highschoolName'
            label='Highschool Name'
            placeholder='Princeton High'
            onChange={handleChange}
          />
          <FormFieldText
            id='highschoolDiploma'
            label='High School Diploma'
            placeholder='Highschool Diploma'
            onChange={handleChange}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Month Start '
              data={MONTHS}
              listName='Highschool Month Start'
              id='highschoolStartMonth'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Month'
              data={MONTHS}
              listName='Highschool End Month'
              id='highschoolMonthEnd'
              handleInput={handleChange}
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Start Year'
              data={range(currentYear, currentYear - 60, -1)}
              listName='Highschool Start Year'
              id='highschoolStartYear'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Year'
              data={range(currentYear, currentYear - 58, -1)}
              listName='Highschool End Year'
              id='highschoolYearEnd'
              handleInput={handleChange}
            />
          </div>
        </>
      );
      break;
    case "Some College":
      component = (
        <>
          <FormFieldText
            id='highschoolName'
            label='Highschool Name'
            placeholder='Princeton High'
            onChange={handleChange}
          />
          <FormFieldText
            id='highschoolDiploma'
            label='High School Diploma'
            placeholder='Highschool Diploma'
            onChange={handleChange}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Month Start '
              data={MONTHS}
              listName='Highschool Month Start'
              id='highschoolStartMonth'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Month'
              data={MONTHS}
              listName='Highschool End Month'
              id='highschoolMonthEnd'
              handleInput={handleChange}
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Start Year'
              data={range(currentYear, currentYear - 60, -1)}
              listName='Highschool Start Year'
              id='highschoolStartYear'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Year'
              data={range(currentYear, currentYear - 58, -1)}
              listName='Highschool End Year'
              id='highschoolYearEnd'
              handleInput={handleChange}
            />
          </div>
        </>
      );
      break;
    case "Bachelor's Degree":
      component = (
        <>
          <FormFieldText
            id='highschoolName'
            label='Highschool Name'
            placeholder='Princeton High'
            onChange={handleChange}
          />
          <FormFieldText
            id='highschoolDiploma'
            label='High School Diploma'
            placeholder='Highschool Diploma'
            onChange={handleChange}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Month Start '
              data={MONTHS}
              listName='Highschool Month Start'
              id='highschoolStartMonth'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Month'
              data={MONTHS}
              listName='Highschool End Month'
              id='highschoolMonthEnd'
              handleInput={handleChange}
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Start Year'
              data={range(currentYear, currentYear - 60, -1)}
              listName='Highschool Start Year'
              id='highschoolStartYear'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Year'
              data={range(currentYear, currentYear - 58, -1)}
              listName='Highschool End Year'
              id='highschoolYearEnd'
              handleInput={handleChange}
            />
          </div>
        </>
      );
      break;
    case "Graduate or professional degree":
      component = (
        <>
          <FormFieldText
            id='highschoolName'
            label='Highschool Name'
            placeholder='Princeton High'
            onChange={handleChange}
          />
          <FormFieldText
            id='highschoolDiploma'
            label='High School Diploma'
            placeholder='Highschool Diploma'
            onChange={handleChange}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Month Start '
              data={MONTHS}
              listName='Highschool Month Start'
              id='highschoolStartMonth'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Month'
              data={MONTHS}
              listName='Highschool End Month'
              id='highschoolMonthEnd'
              handleInput={handleChange}
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Start Year'
              data={range(currentYear, currentYear - 60, -1)}
              listName='Highschool Start Year'
              id='highschoolStartYear'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Year'
              data={range(currentYear, currentYear - 58, -1)}
              listName='Highschool End Year'
              id='highschoolYearEnd'
              handleInput={handleChange}
            />
          </div>
        </>
      );
      break;
    case "Trade School or Other":
      component = (
        <>
          <FormFieldText
            id='highschoolName'
            label='Highschool Name'
            placeholder='Princeton High'
            onChange={handleChange}
          />
          <FormFieldText
            id='highschoolDiploma'
            label='High School Diploma'
            placeholder='Highschool Diploma'
            onChange={handleChange}
          />
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Month Start '
              data={MONTHS}
              listName='Highschool Month Start'
              id='highschoolStartMonth'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Month'
              data={MONTHS}
              listName='Highschool End Month'
              id='highschoolMonthEnd'
              handleInput={handleChange}
            />
          </div>
          <div className='flex w-full justify-between items-center gap-4'>
            <DropDownMenu
              placeholder='Highschool Start Year'
              data={range(currentYear, currentYear - 60, -1)}
              listName='Highschool Start Year'
              id='highschoolStartYear'
              handleInput={handleChange}
            />
            <DropDownMenu
              placeholder='Highschool End Year'
              data={range(currentYear, currentYear - 58, -1)}
              listName='Highschool End Year'
              id='highschoolYearEnd'
              handleInput={handleChange}
            />
          </div>
        </>
      );
      break;
    default:
      component = false;
  }

  return (
    <>
      <h3 className='flex justify-center items-center'>Education</h3>
      <form action='submit'>
        <DropDownMenu
          placeholder='Education Level'
          data={EDUCATION_LEVEL}
          listName='Highest level of Education'
          id='highestLevelOfEducation'
          handleInput={handleChange}
        />
        {component}
      </form>
    </>
  );
};

export default Education;
