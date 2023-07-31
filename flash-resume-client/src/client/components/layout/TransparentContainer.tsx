import React from "react";

const TransparentContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='bg-opacity-50 bg-white blur-lg drop-shadow-md'>
      <div className='px-8 py-10'>{children}</div>
    </div>
  );
};

export default TransparentContainer;
