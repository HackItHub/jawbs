import React from "react";
import { TransparentContainer } from "../components/layout";
import { Experience } from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  return (
    <TransparentContainer>
      {/* <Address /> */}
      {/* <Person /> */}
      {/* <Education /> */}
      <Experience />
    </TransparentContainer>
  );
};

export default ResumeFields;
