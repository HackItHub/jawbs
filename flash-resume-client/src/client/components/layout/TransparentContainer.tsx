import React from "react";

const TransparentContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='bg-opacity-50 bg-transparent-background backdrop-blur-sm rounded-md drop-shadow-md w-[600px]'>
      <div className='px-8 py-10'>{children}</div>
    </div>
  );
};

export default TransparentContainer;
