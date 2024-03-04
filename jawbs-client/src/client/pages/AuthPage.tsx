import React from "react";
import { SignIn } from "../components/auth";
import { LayoutContainer, TransparentContainer } from "../components/layout";

const Authorization: React.FC = () => {
  return (
    <TransparentContainer>
      <LayoutContainer>
        <SignIn />
      </LayoutContainer>
    </TransparentContainer>
  );
};

export default Authorization;
