import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import TransparentContainer from "../layout/TransparentContainer";

const Authorization: React.FC = () => {
  const [isUser] = useState(false);

  return (
    <TransparentContainer>
      {!isUser ? <SignUp /> : <SignIn />}
    </TransparentContainer>
  );
};

export default Authorization;
