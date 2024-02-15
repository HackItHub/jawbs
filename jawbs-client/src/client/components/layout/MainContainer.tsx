import React from "react";

const MainContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className='px-6 py-2 bg-[#F5F5F5] w-full h-full'>{children}</main>
  );
};

export default MainContainer;
