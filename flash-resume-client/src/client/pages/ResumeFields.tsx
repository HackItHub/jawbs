import React from "react";
import { TransparentContainer } from "../components/layout";
import { Education } from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  return (
    <TransparentContainer>
      {/* <Address /> */}
      {/* <Person /> */}
      <Education />
    </TransparentContainer>
  );
};

export default ResumeFields;
