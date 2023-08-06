import React, { useState } from "react";
import { DropDownMenu } from "../layout";

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

const EDUCATION_LEVEL = ["Highschool", "Some College", "College Degree"];

const Education: React.FC = () => {
  const [education, setEducation] = useState<EducationEntries>({
    highestLevelOfEducation: "",
  });

  const handleChange = (name: string, value: any) => {
    setEducation({ ...education, [name]: value });
  };

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
            handleInput={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default Education;
