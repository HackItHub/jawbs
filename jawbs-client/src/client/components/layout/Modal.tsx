import React, { PropsWithChildren } from "react";

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-45'>
      <div className='w-full h-full flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
