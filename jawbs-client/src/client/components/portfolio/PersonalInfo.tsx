import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { useUserInfoContext } from "../../contexts";
import { Heading, DisplayText, Section, SubSection, Modal } from "../layout";
import { PersonForm } from "../resume-fields";

const PersonalInfoPortfolio: React.FC = () => {
  const { userInfo: portfolio } = useUserInfoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className='flex justify-center'>
        <Heading size='h2'>
          {portfolio.person?.firstName}{" "}
          {portfolio.person?.middleName
            ? `${portfolio.person?.middleName.charAt(0)}.`
            : ""}{" "}
          {portfolio.person?.lastName}
        </Heading>
      </div>
      <Section>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex gap-2 items-center'>
            <FaEnvelope className='text-xl' />
            <DisplayText>{portfolio?.email}</DisplayText>
          </div>
          {portfolio.person?.phone && (
            <div className='flex gap-2 item-center'>
              <FaPhone className='text-xl' />
              <DisplayText>{portfolio.person.phone}</DisplayText>
            </div>
          )}
          {portfolio.address?.city && portfolio.address?.country && (
            <div className='flex gap-2 items-center'>
              <FaLocationDot className='text-xl' />
              <DisplayText>
                {portfolio.address.city}, {portfolio.address.country}
              </DisplayText>
            </div>
          )}
        </div>
        <div className='border-2 rounded-md border-solid shadow-md border-text-placeholder border-opacity-30 w-full px-4 py-2 mb-2 mt-2'>
          <button
            type='button'
            className='w-full py-4'
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <div className='text-text-placeholder flex justify-center items-center gap-2'>
              Add Personal Information
              <IoMdAddCircle />
            </div>
          </button>
        </div>
        {isModalOpen && (
          <Modal>
            <PersonForm
              handleFormChange={() => {
                setIsModalOpen(!isModalOpen);
              }}
            />
          </Modal>
        )}
      </Section>
      {portfolio.person?.summary && (
        <Section>
          <Heading size='h3'>Summary</Heading>
          <SubSection>
            <DisplayText>{portfolio.person.summary}</DisplayText>
          </SubSection>
        </Section>
      )}
    </div>
  );
};

export default PersonalInfoPortfolio;
