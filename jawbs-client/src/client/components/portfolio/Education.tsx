import React from "react";
import { useUserInfoContext } from "../../contexts";
import { Section, SubSection, Heading, DisplayText } from "../layout";

const EducationPortfolio: React.FC = () => {
  const { education } = useUserInfoContext().userInfo;

  return (
    <div>
      <Section>
        <Heading>Education</Heading>
        {education?.school.length &&
          education.school.map((edu) => (
            <SubSection key={edu.id}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <Heading size='h4'>{edu.name},</Heading>
                  <DisplayText tailwind='italic text-lg'>
                    {edu.diploma}
                  </DisplayText>
                </div>
                <div className='flex items-center'>
                  <DisplayText>
                    {edu.startMonth} {edu.startYear} - {edu.endMonth}{" "}
                    {edu.endYear}
                  </DisplayText>
                </div>
              </div>
            </SubSection>
          ))}
      </Section>
    </div>
  );
};

export default EducationPortfolio;
