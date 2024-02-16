/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useAuthContext, useUserInfoContext } from "../contexts";
import {
  LayoutContainer,
  Loading,
  ErrorMessage,
  Section,
  Heading,
  DisplayText,
  SubSection,
} from "../components/layout";
import { User } from "../utils/Interfaces";
import Header from "../components/header/Header";

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<Partial<User>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { setUserInfo } = useUserInfoContext();
  const { currentUser } = useAuthContext();

  const getPortfolio = async () => {
    try {
      setHasError(false);
      setIsLoading(true);
      const response = await axios.get(`/user/portfolio/${currentUser}`);
      setPortfolio(response.data);
      setIsLoading(false);
      setUserInfo(response.data);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setHasError(true);
    }
  };

  const formatPhone = (phone: string) => {
    let phoneFormat = `+${phone[0]} (${phone.slice(1, 4)})-${phone.slice(
      4,
      7,
    )}-${phone.slice(6)}`;
    return phoneFormat;
  };

  const PersonalInformation = () => {
    return (
      <LayoutContainer color='bg-white' shadow={true}>
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
      </LayoutContainer>
    );
  };

  useEffect(() => {
    getPortfolio();
  }, []);
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      {hasError && (
        <ErrorMessage message='Something went wrong. Please try again.' />
      )}
      {!hasError && !isLoading && <PersonalInformation />}
    </>
  );
};

export default Portfolio;
