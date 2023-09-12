import React, { useState, useRef } from "react";

type SlideInContainerProps = {
  children: React.PropsWithChildren[];
};
const SlideInContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [slideInIndex, setSlideInIndex] = useState(0);

  return <div>{children}</div>;
};
