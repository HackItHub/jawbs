/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../contexts";
import { User } from "../utils/Interfaces";
import { MainContainer, LayoutContainer } from "../components/layout";

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<Partial<User>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentUser = "79d1ab3c-4a82-4514-8543-bfb1b8ee0403";

  const getPortfolio = async () => {
    try {
      setHasError(false);
      setIsLoading(true);
      const response = await axios.get(`/users/${currentUser}`);
      setPortfolio(response.data);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
    }
  };

  const PersonalInformation = () => {
    return (
      <LayoutContainer color='bg-white'>
        <div>Name:</div>
        {portfolio.person?.firstName}
      </LayoutContainer>
    );
  };

  useEffect(() => {
    getPortfolio();
  }, []);
  return <PersonalInformation />;
};

export default Portfolio;
