/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext, useUserInfoContext } from "../contexts";
import { LayoutContainer, Loading, ErrorMessage } from "../components/layout";
import { User } from "../utils/Interfaces";

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<Partial<User>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentUser = "06a75613-1925-4d87-b62b-c0cf26545e04";
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
      setHasError(true);
    }
  };

  const PersonalInformation = () => {
    return (
      <LayoutContainer color='bg-white'>
        <div>Name:</div>
        {portfolio.person?.firstName} {portfolio.person?.lastName}
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
