import React from "react";

const LayoutContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='px-6bg-white'>
      <div className='rounded-md drop-shadow-md w-full'>
        <div className='px-8 py-10'> {children} </div>
      </div>
    </div>
  );
};
