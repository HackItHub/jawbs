import React, { useState } from "react";
import { SignIn, SignUp } from "../components/auth";
import { TransparentContainer } from "../components/layout";

const Authorization: React.FC = () => {
  const [isUser] = useState(false);

  return (
    <TransparentContainer>
      {!isUser ? <SignUp /> : <SignIn />}
    </TransparentContainer>
  );
};

export default Authorization;
