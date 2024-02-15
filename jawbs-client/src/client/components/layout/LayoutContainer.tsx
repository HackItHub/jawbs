import React from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
  shadow?: boolean;
};

const LayoutContainer: React.FC<Props> = ({ children, color, shadow }) => {
  return (
    <div
      className={`${color} rounded-xl overflow-hidden ${
        shadow ? "shadow-md" : ""
      }`}
    >
      <div className='px-4 py-8'> {children} </div>
    </div>
  );
};

LayoutContainer.defaultProps = {
  color: "bg-white",
  shadow: false,
};

export default LayoutContainer;
