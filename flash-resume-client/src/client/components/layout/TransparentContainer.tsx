import React from "react";

const TransparentContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-opacity-50 bg-white drop-shadow-md w-[600px]'>
        <div className='px-8 py-10'>{children}</div>
      </div>
    </div>
  );
};

export default TransparentContainer;
