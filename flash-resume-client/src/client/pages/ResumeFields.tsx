import React, { useState, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";
import "../assets/styles/form.css";
import { Experience, Person, Address } from "../components/resume-fields";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>,
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Person />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Address />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Experience />
    </animated.div>
  ),
];

const ResumeFields: React.FC = () => {
  const [index, setIndex] = useState(0);
  const onClick = () => setIndex((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className='transition-form-container'>
      <div
        className='transition-form'
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Space") {
            onClick();
          }
        }}
        tabIndex={0}
        role='button'
        aria-label='Click to perform an action'
      >
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
        {/* <Address /> */}
        {/* <Person /> */}
        {/* <Education /> */}
        {/* <Experience /> */}
      </div>
    </div>
  );
};

export default ResumeFields;
