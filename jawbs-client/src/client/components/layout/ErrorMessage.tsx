import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import "../../assets/styles/error/error.css";

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className='error-message'>
    <span className='error-icon'>
      <FaCircleExclamation />
    </span>
    <span>{message}</span>
  </div>
);

export default ErrorMessage;
