import React from "react";

type Props = {
  children: React.ReactNode;
  color: string;
};

const LayoutContainer: React.FC<Props> = ({ children, color }) => {
  return (
    <div className={`px-6 ${color}`}>
      <div className='rounded-md drop-shadow-md w-full'>
        <div className='px-8 py-10'> {children} </div>
      </div>
    </div>
  );
};

export default LayoutContainer;
