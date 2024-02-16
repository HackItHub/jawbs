import React from "react";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { useUserInfoContext } from "../../contexts";
import { Heading, DisplayText, Section, SubSection } from "../layout";

const PersonalInfo: React.FC = () => {
  const { userInfo: portfolio } = useUserInfoContext();
  const formatPhone = (phone: string) => {
    const phoneLength = Math.floor(phone.length / 10) + (phone.length % 10) - 1;
    return `+${phone.slice(0, phoneLength)} (${phone.slice(
      1,
      4,
    )})-${phone.slice(4, 7)}-${phone.slice()}`;
  };

  return (
    <div>
      <Heading size='h2'>
        {portfolio.person?.firstName}{" "}
        {portfolio.person?.middleName
          ? `${portfolio.person?.middleName.charAt(0)}.`
          : ""}{" "}
        {portfolio.person?.lastName}
      </Heading>
      <Section>
        <SubSection>
          <div className='flex gap-2 items-center'>
            <FaEnvelope className='text-xl' />
            <DisplayText>{portfolio?.email}</DisplayText>
          </div>
        </SubSection>
        {portfolio.person?.phone && (
          <SubSection>
            <div className='flex gap-2 item-center'>
              <FaPhone className='text-xl' />
              <DisplayText>{formatPhone(portfolio.person.phone)}</DisplayText>
            </div>
          </SubSection>
        )}
        {portfolio.address?.city && portfolio.address?.country && (
          <SubSection>
            <div className='flex gap-2 items-center'>
              <FaLocationDot className='text-xl' />
              <DisplayText>
                {portfolio.address.city}, {portfolio.address.country}
              </DisplayText>
            </div>
          </SubSection>
        )}
      </Section>
      {portfolio.person?.summary && (
        <Section>
          <Heading size='h3'>Summary:</Heading>
          <SubSection>
            <DisplayText>{portfolio.person.summary}</DisplayText>
          </SubSection>
        </Section>
      )}
    </div>
  );
};

export default PersonalInfo;
