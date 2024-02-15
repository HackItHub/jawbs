import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import "../../assets/styles/error/error.css";

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className='error-message'>
    <span className='error-icon'>
      <BiSolidErrorCircle />
    </span>
    <span>{message}</span>
  </div>
);

export default ErrorMessage;
