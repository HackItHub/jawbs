import React from "react";

type Props = {
  children: React.ReactNode;
  tailwind?: string;
};

const DisplayText: React.FC<Props> = ({ children, tailwind }) => (
  <p className={`font-display-text text-base ${tailwind} m-0 p-0`}>
    {" "}
    {children}{" "}
  </p>
);

DisplayText.defaultProps = {
  tailwind: "text-black",
};

export default DisplayText;
