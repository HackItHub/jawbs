import React from "react";
import { SignIn } from "../components/auth";
import { BallBackground } from "../utils";

const SignInPage: React.FC = () => {
  return (
    <div className='background'>
      <BallBackground />
      <SignIn />
    </div>
  );
};

export default SignInPage;
