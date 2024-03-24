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

type VerificationResponse = {
  verified?: boolean;
  deleted?: boolean;
};

const VerificationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isVerified, setIsVerified] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5);
  const [verificationResponse, setVerificationResponse] =
    useState<VerificationResponse>({});
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
      const response: VerificationResponse = await axios.post(
        `/api/auth/verification?${key}=${value}`,
      );
      setVerificationResponse(response);
      setIsLoading(false);
      setIsVerified(true);
      if (key !== "oneTimeDeleteToken") {
        startRedirectTimer();
      }
    } catch (err) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    if (searchParams.size === 1) {
      for (const [key, value] of searchParams.entries()) {
        userVerification(key, value);
      }
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isVerified && redirectTimer > 0) {
      timer = setInterval(() => {
        setRedirectTimer(redirectTimer - 1);
      }, 1000);
    }

    if (redirectTimer <= 0) {
      clearInterval(timer);
      navigate("/sign-in");
    }
  }, [redirectTimer]);

  return (
    <LayoutContainer>
      <Section>
        <SubSection>
          <>
            <Heading>Welcome to Jawbs!</Heading>
            {!searchParams.size && (
              <DisplayText>
                Thank you for signing up, please verify your account with the
                email we have sent. You will be redirected to the sign in page{" "}
                {redirectTimer}
              </DisplayText>
            )}
          </>
          {isLoading && <Loading />}
          {hasError && !Object.keys(verificationResponse) && !isLoading && (
            <DisplayText>
              Something went wrong{" "}
              <button
                onClick={() => userVerification}
                className='border-none bg-transparent'
                type='button'
              >
                Try again
              </button>
            </DisplayText>
          )}
          {verificationResponse.verified && (
            <>
              <DisplayText>
                Your account has successfully been verified, please proceed with
                filling out your details
              </DisplayText>
              <DisplayText>
                You will be redirected to the sign in page: {redirectTimer}
              </DisplayText>
              <Heading size='h4'>OR</Heading>
              <DisplayText>
                Redirect immediately:{" "}
                <Link to='/sign-in' className='pt-2 underline border-0 bg-none'>
                  Sign in
                </Link>
              </DisplayText>
            </>
          )}
          {verificationResponse.deleted && (
            <>
              <DisplayText>The associated account has been deleted</DisplayText>
              <DisplayText>
                You will be redirected to the sign in page {redirectTimer}
              </DisplayText>
              <Heading size='h4'>OR</Heading>
              <DisplayText>
                Redirect immediately:{" "}
                <Link to='/sign-up' className='pt-2 underline border-0 bg-none'>
                  Sign up
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
