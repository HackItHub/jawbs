import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useUserInfoContext } from "../../contexts";
import { Section, SubSection, Heading, DisplayText, Modal } from "../layout";
import { EducationForm } from "../resume-fields";

const EducationPortfolio: React.FC = () => {
  const { education } = useUserInfoContext().userInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Section>
        <Heading>Education</Heading>
        <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2 mt-2x'>
          <button
            type='button'
            className='w-full py-4'
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <div className='text-text-placeholder flex justify-center items-center gap-2'>
              Add Education
              <IoMdAddCircle />
            </div>
          </button>
        </div>
        {isModalOpen && (
          <Modal>
            <EducationForm
              handleFormChange={() => {
                setIsModalOpen(!isModalOpen);
              }}
              className='bg-white'
            />
          </Modal>
        )}
        {education?.schools &&
          education.schools.map((edu) => (
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
