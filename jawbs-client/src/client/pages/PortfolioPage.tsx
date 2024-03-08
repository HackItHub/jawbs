import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext, useUserInfoContext } from "../contexts";
import { Loading, ErrorMessage, LayoutContainer } from "../components/layout";
import PersonalInfoPortfolio from "../components/portfolio/PersonalInfo";
import ExperiencePortfolio from "../components/portfolio/Experience";
import EducationPortfolio from "../components/portfolio/Education";
import Header from "../components/header/Header";

const PortfolioPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { token } = useAuthContext();

  const getPortfolio = async () => {
    if (!Object.keys(userInfo).length) {
      setIsLoading(true);
      try {
        setHasError(false);
        const response = await axios.get("/api/user/portfolio", {
          headers: {
            Authorization: token,
          },
        });
        setIsLoading(false);
        setUserInfo(response.data);
        setHasLoaded(true);
        setHasError(false);
      } catch (err) {
        setIsLoading(false);
        setHasError(true);
        setHasLoaded(false);
        navigate("/sign-in");
      }
    } else {
      setHasLoaded(true);
      setIsLoading(false);
      setHasError(false);
    }
  };

  useEffect(() => {
    getPortfolio();
  });
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      {hasError && (
        <ErrorMessage message='Something went wrong. Please try again.' />
      )}
      {!hasError && !isLoading && (
        <LayoutContainer>
          {hasLoaded && (
            <>
              <PersonalInfoPortfolio />
              <ExperiencePortfolio />
              <EducationPortfolio />
            </>
          )}
        </LayoutContainer>
      )}
    </>
  );
};

export default PortfolioPage;
