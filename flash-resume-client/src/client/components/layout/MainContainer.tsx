import React from "react";

const MainContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className='px-6 py-2 bg-white'>{children}</div>;
};
