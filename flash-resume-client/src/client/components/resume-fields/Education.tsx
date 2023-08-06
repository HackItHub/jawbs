import React, { useState } from "react";
import { DropDownMenu, FormFieldText } from "../layout";

interface EducationEntries {
  highestLevelOfEducation: string;
  highschool?: string;
  college?: string;
  tradeSchool?: string;
  certificates?: string;
  highSchoolStartYear?: number;
  highSchoolEndYear?: number;
  highSchoolStartMonth?: string;
  highSchoolEndMonth?: string;
  collegeStartYear?: number;
  collegeEndYear?: number;
  collegeStartMonth?: string;
  collegeEndMonth?: string;
  tradeSchoolStartYear?: number;
  tradeSchoolEndYear?: number;
  tradeSchoolStartMonth?: string;
  tradeSchoolEndMonth?: string;
}

const EDUCATION_LEVEL = [
  "Highschool",
  "Some College",
  "Diploma",
  "Certification",
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
    case "Highschool":
      component = (
        <>
          <FormFieldText
            id='highschoolName'
            label='Highschool Name'
            placeholder='Princeton High'
            onChange={handleChange}
          />
          <div className='flex w-full'>
            <div>
              <div className='form-input-container' role='presentation'>
                Highschool Start
                <DropDownMenu
                  placeholder='Highschool Start'
                  data={EDUCATION_LEVEL}
                  listName='Highschool Start'
                  id='highschoolStart'
                  handleInput={handleChange}
                />
              </div>
            </div>
          </div>
          <div>Something</div>
        </>
      );
      break;
    case "Some College":
      <>Hello</>;
      break;
    default:
      <>Jeez</>;
  }

  return (
    <form action='submit'>
      <h3>Education</h3>
      <div>
        <div className='form-input-container' role='presentation'>
          Highest Level of Education
          <DropDownMenu
            placeholder='Education Level'
            data={EDUCATION_LEVEL}
            listName='Education'
            id='highestLevelOfEducation'
            handleInput={handleChange}
          />
          {component}
        </div>
      </div>
    </form>
  );
};

export default Education;
