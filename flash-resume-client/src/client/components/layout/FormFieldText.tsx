import React, { useState } from "react";

interface Props {
  placeholder: string;
  isRequired?: boolean;
  label: string;
  onChange: (name: string, value: string) => void;
  id: string;
  type?: string;
}

const FormFieldText: React.FC<Props> = ({
  placeholder,
  isRequired,
  label,
  onChange,
  id,
  type,
}) => {
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(value);
    onChange(name, value);
  };
  return (
    <div className='mb-2'>
      <label htmlFor={id} className='form-input-container'>
        {label}
        <input
          id={id}
          onChange={handleInput}
          className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-input'
          placeholder={placeholder}
          aria-required={isRequired}
          required={isRequired}
          value={input}
          type={type}
        />
      </label>
    </div>
  );
};

FormFieldText.defaultProps = {
  type: "text",
  isRequired: false,
};

export default FormFieldText;
