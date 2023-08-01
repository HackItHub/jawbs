import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TransparentContainer from "./components/layout/TransparentContainer";

const Authorization: React.FC = () => {
  const [isUser] = useState(false);

  return (
    <TransparentContainer>
      {!isUser ? <SignUp /> : <SignIn />}
    </TransparentContainer>
  );
};

export default Authorization;
