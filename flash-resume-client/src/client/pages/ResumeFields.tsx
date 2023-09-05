import React, { useState, useEffect } from "react";
import { useSpringRef, useTransition } from "@react-spring/web";
import { Experience } from "../components/resume-fields";

const ResumeFields: React.FC = () => {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className='transition-form-container'>
      {/* <Address /> */}
      {/* <Person /> */}
      {/* <Education /> */}
      <Experience />
    </div>
  );
};

export default ResumeFields;
