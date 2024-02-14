import React from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
};

const DisplayText: React.FC<Props> = ({ children, color }) => (
  <p className={`font-display-text text-base ${color} m-0 p-0`}> {children} </p>
);

DisplayText.defaultProps = {
  color: "black",
};

export default DisplayText;
