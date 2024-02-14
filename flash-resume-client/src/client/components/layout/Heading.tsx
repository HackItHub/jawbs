import React from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<Props> = ({ children, color, size }) => {
  const HeadingSize = size || "h3";
  return (
    <HeadingSize className={`${color} m-0 font-heading`}>
      {children}
    </HeadingSize>
  );
};

Heading.defaultProps = {
  size: "h3",
  color: "black",
};

export default Heading;
