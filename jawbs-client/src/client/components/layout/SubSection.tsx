import React, { PropsWithChildren } from "react";

const SubSection: React.FC<PropsWithChildren> = ({ children }) => (
  <div className='px-2 py-1'>{children}</div>
);

export default SubSection;
