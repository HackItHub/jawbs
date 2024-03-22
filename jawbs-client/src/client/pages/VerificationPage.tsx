import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import {
  LayoutContainer,
  Section,
  SubSection,
  DisplayText,
  Heading,
  Loading,
} from "../components/layout";

const VerificationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isVerified, setIsVerified] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5);
  const [alreadyRun, setAlreadyRun] = useState(false);
  const navigate = useNavigate();

  const startRedirectTimer = () => {
    const timer = setInterval(() => {
      return setRedirectTimer(redirectTimer - 1);
    }, 1000);

    if (redirectTimer === 0) {
      clearInterval(timer);
      navigate("/sign-in");
    }
  };

  const userVerification = async (key: string, value: string) => {
    try {
      setIsLoading(true);
      setHasError(false);
      await axios.post(`/api/auth/verification?${key}=${value}`);
      setIsLoading(false);
      setIsVerified(true);
      startRedirectTimer();
    } catch (err) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    if (!alreadyRun) {
      setAlreadyRun(true);
      if (searchParams.size === 1) {
        for (const [key, value] of searchParams.entries()) {
          userVerification(key, value);
        }
      }
    }
  }, []);

  useEffect(() => {
    startRedirectTimer();
  }, [redirectTimer]);

  return (
    <LayoutContainer>
      <Section>
        <SubSection>
          {!searchParams.size && (
            <>
              <Heading>Welcome to Jawbs!</Heading>
              <DisplayText>
                Thank you for signing up, please verify your account with the
                email we have sent.
              </DisplayText>
            </>
          )}
          {isLoading && <Loading />}
          {hasError && !isVerified && !isLoading && (
            <>
              <Heading>Welcome to Jawbs!</Heading>
              <DisplayText>
                Something went wrong{" "}
                <button
                  onClick={() => userVerification}
                  className='border-none bg-transparent'
                  type='button'
                >
                  try again?
                </button>
              </DisplayText>
            </>
          )}
          {isVerified && (
            <>
              <Heading>Welcome to Jawbs!</Heading>
              <DisplayText>
                Your account has successfully been verified, please proceed with
                filling out your details
              </DisplayText>
              <DisplayText>
                You will be redirected to the sign in page {redirectTimer}
              </DisplayText>
              <Heading size='h4'>OR</Heading>
              <DisplayText>
                Redirect immediately:{" "}
                <Link to='/sign-in' className='pt-2 underline border-0 bg-none'>
                  {" "}
                  Sign in
                </Link>
              </DisplayText>
            </>
          )}
        </SubSection>
      </Section>
    </LayoutContainer>
  );
};

export default VerificationPage;
