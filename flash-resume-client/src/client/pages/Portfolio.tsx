/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../contexts";

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentUser = "79d1ab3c-4a82-4514-8543-bfb1b8ee0403";

  const getPortfolio = async () => {
    try {
      setHasError(false);
      setIsLoading(true);
      const response = await axios.get(`/users/${currentUser}`);
      console.log(response);
      setPortfolio(response);

      setIsLoading(false);
    } catch (err) {
      setHasError(true);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);
  return <div>Hello</div>;
};

export default Portfolio;
