import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ children }) => (
  <div className='px-4 py-3'>{children}</div>
);

export default Section;
