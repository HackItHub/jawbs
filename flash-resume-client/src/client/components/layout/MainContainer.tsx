import React from "react";

const MainContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className='px-6 py-2 bg-[#F5F5F5] w-full h-full'>{children}</div>;
};

export default MainContainer;
