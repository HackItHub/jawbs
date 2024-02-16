/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext, useUserInfoContext } from "../contexts";
import { Loading, ErrorMessage, LayoutContainer } from "../components/layout";
import { User } from "../utils/Interfaces";
import Header from "../components/header/Header";
import PersonalInfo from "../components/portfolio/PersonalInfo";

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { currentUser } = useAuthContext();

  const getPortfolio = async () => {
    if (!Object.keys(userInfo).length) {
      try {
        setHasError(false);
        setIsLoading(true);
        const response = await axios.get(`/user/portfolio/${currentUser}`);
        setIsLoading(false);
        setUserInfo(response.data);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
        setHasError(true);
      }
    }
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
      {!hasError && !isLoading && (
        <LayoutContainer>
          <PersonalInfo />
        </LayoutContainer>
      )}
    </>
  );
};

export default Portfolio;
