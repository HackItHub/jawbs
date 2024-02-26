import React from "react";
import { Section, Heading, SubSection, DisplayText } from "../layout";
import { useUserInfoContext } from "../../contexts";

const ExperiencePortfolio: React.FC = () => {
  const { userInfo } = useUserInfoContext();
  const { experience } = userInfo;
  return (
    <div>
      <Section>
        <Heading size='h3'>Experience</Heading>
        {experience &&
          experience.map((role) => (
            <SubSection key={role.id}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <Heading size='h4'>{role.experience},</Heading>
                  <DisplayText tailwind='italic text-lg'>
                    {role.title}
                  </DisplayText>
                </div>
                <div className='flex items-center'>
                  <DisplayText>
                    {role.startMonth} {role.startYear} - {role.endMonth}{" "}
                    {role.endYear}
                  </DisplayText>
                </div>
              </div>

              <ul>
                {role.responsibilities.map((responsibility) => (
                  <li
                    key={role.id + responsibility}
                    className='list-item list-disc ml-4'
                  >
                    <DisplayText>{responsibility}</DisplayText>
                  </li>
                ))}
              </ul>
            </SubSection>
          ))}
      </Section>
    </div>
  );
};

export default ExperiencePortfolio;
