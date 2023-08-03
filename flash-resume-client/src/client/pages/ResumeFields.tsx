import React from "react";
import { TransparentContainer } from "../components/layout";
import { Address, Person } from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  return (
    <TransparentContainer>
      <Address />
      <Person />
    </TransparentContainer>
  );
};

export default ResumeFields;
