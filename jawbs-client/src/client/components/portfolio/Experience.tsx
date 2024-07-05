import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Section, Heading, SubSection, DisplayText } from "../layout";
import { useUserInfoContext } from "../../contexts";

const ExperiencePortfolio: React.FC = () => {
  const { userInfo } = useUserInfoContext();
  const { experience } = userInfo;
  return (
    <div>
      <Section>
        <Heading size='h3'>Experience</Heading>
        <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2 mt-2'>
          <button type='button' className='w-full py-4'>
            <div className='text-text-placeholder flex justify-center items-center gap-2'>
              Add Experience
              <IoMdAddCircle />
            </div>
          </button>
        </div>
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
