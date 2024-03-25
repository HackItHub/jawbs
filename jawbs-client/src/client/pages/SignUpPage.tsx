import React from "react";
import { SignUp } from "../components/auth";
import { BallBackground } from "../utils";

const SignUpPage: React.FC = () => {
  return (
    <div className='background'>
      <BallBackground />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
