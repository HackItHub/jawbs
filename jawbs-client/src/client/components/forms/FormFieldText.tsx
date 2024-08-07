import React, { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types.cjs";
import { FaCircleExclamation } from "react-icons/fa6";
import { WARNING_STYLE } from "../../utils/Constants";

/* eslint-disable */
interface Props {
  placeholder: string;
  isRequired?: boolean;
  label: string;
  onChange: (name: string, value: any) => void;
  id: string;
  type?: string;
  dataId: string;
  value?: any;
  errorMessage?: string | undefined;
  password?: boolean;
  autoComplete?: string;
}

const FormFieldText: React.FC<Props> = ({
  placeholder,
  isRequired,
  label,
  onChange,
  id,
  type,
  dataId,
  value,
  errorMessage,
  autoComplete,
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    if (type === "numeric" || type === "tel") {
      if (!Number.isNaN(Number(inputValue))) {
        onChange(dataId, Number(inputValue));
      }
    } else {
      onChange(dataId, inputValue);
    }
  };

  const handlePhoneInput = (e: E164Number) => {
    onChange(dataId, e);
  };

  const handleTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: inputValue } = e.target;
    onChange(dataId, inputValue);
  };

  const [inputType, setInputType] = useState(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className='mb-2'>
      {(type === "password" || !type) && (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <div className="relative">
            <input
              id={id}
              onChange={handleInput}
              className={`rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ${errorMessage ? " border-red border-2 border-solid " : " ring-1 "
                } ring-inset ring-gray-300 hover:bg-gray-50 text-input`}
              placeholder={placeholder}
              aria-required={isRequired}
              required={isRequired}
              type={inputType}
              value={value}
              autoComplete={autoComplete}
            />
            <span
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-600'
            >
              {isPasswordVisible ? '🙈' : '👁️'}
            </span>
          </div>
        </label>
      )}
      {type === "email" && (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <input
            id={id}
            onChange={handleInput}
            className={`rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ${errorMessage ? " border-red border-2 border-solid " : " ring-1 "
              } ring-inset ring-gray-300 hover:bg-gray-50 text-input`}
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            type={type}
            value={value}
            autoComplete={autoComplete}
          />
        </label>
      )}
      {(type === "text" || type === "email" || !type) && (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <input
            id={id}
            onChange={handleInput}
            className={`rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ${errorMessage ? " border-red border-2 border-solid " : " ring-1 "
              } ring-inset ring-gray-300 hover:bg-gray-50 text-input`}
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            type={type}
            value={value}
            autoComplete={autoComplete}
          />
        </label>
      )}
      {type === "textarea" && (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <textarea
            id={id}
            onChange={handleTextAreaInput}
            className={`rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ${errorMessage ? " border-red border-2 border-solid " : " ring-1 "
              } ring-inset ring-gray-300 hover:bg-gray-50 text-input`}
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            value={value}
          />
        </label>
      )}
      {type === "tel" && (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <PhoneInputWithCountrySelect
            id={id}
            onChange={handlePhoneInput}
            className={`rounded-md bg-white  text-sm font-semibold text-gray-900 shadow-sm ${errorMessage ? " border-red border-2 border-solid " : " ring-1 "
              } ring-inset ring-gray-300 hover:bg-gray-50 text-input`}
            placeholder={placeholder}
            required={isRequired}
            value={value}
          />
        </label>
      )}
      {type === "numeric" && (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <input
            id={id}
            onChange={handleInput}
            className={`rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ${errorMessage ? " border-red border-2 border-solid " : " ring-1 "
              } ring-inset ring-gray-300 hover:bg-gray-50 text-input`}
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            value={value}
            type={type}
          />
        </label>
      )}
      {errorMessage && (
        <div className='flex pt-1'>
          <FaCircleExclamation style={WARNING_STYLE} />
          <div className='text-red text-sm'>{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

FormFieldText.defaultProps = {
  type: "text",
  isRequired: false,
  value: "",
  errorMessage: "",
};

export default FormFieldText;
