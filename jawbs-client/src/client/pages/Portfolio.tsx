/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext, useUserInfoContext } from "../contexts";
import {
  LayoutContainer,
  Loading,
  ErrorMessage,
  Section,
  Heading,
  DisplayText,
} from "../components/layout";
import { User } from "../utils/Interfaces";

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<Partial<User>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentUser = "072cd781-4ce8-4708-82be-14206be52cc2";
  const { setUserInfo } = useUserInfoContext();

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

  const PersonalInformation = () => {
    return (
      <LayoutContainer color='bg-white' shadow={true}>
        <Heading size='h2'>
          {portfolio.person?.firstName} {portfolio.person?.lastName}
        </Heading>
        <Section>
          <DisplayText>{portfolio?.email}</DisplayText>
        </Section>
      </LayoutContainer>
    );
  };

  useEffect(() => {
    getPortfolio();
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {hasError && (
        <ErrorMessage message='Something went wrong. Please try again.' />
      )}
      {!hasError && !isLoading && <PersonalInformation />}
    </>
  );
};

export default Portfolio;
