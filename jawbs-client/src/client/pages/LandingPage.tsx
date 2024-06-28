import React from "react";
import { SignIn } from "../components/auth";
import { BallBackground } from "../utils";
import { Heading, TransparentContainer } from "../components/layout";

const LandingPage: React.FC = () => {
  return (
    <div className='background'>
      <BallBackground />
      <div className='flex justify-between'>
        <TransparentContainer>
          <Heading size='h1'>Welcome To Jawbs</Heading>
          Let&apos;s make applying easy in 3 simple steps.
          <ol>
            <li>Sign Up</li>
            <li>Fill out your information.</li>
            <li>Start Applying!</li>
          </ol>
        </TransparentContainer>
      </div>
      <div className='self-center'>
        <SignIn />
      </div>
    </div>
  );
};

export default LandingPage;
