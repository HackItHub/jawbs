import React from "react";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { useUserInfoContext } from "../../contexts";
import { Heading, DisplayText, Section, SubSection } from "../layout";

const PersonalInfoPortfolio: React.FC = () => {
  const { userInfo: portfolio } = useUserInfoContext();

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
