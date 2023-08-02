import React, { useState } from "react";

interface Props {
  placeholder: string;
  required: boolean;
  label: string;
  onChange: (e: string) => void;
  id: string;
}

const FormFieldText: React.FC<Props> = ({
  placeholder,
  required,
  label,
  onChange,
  id,
}) => {
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className='form-field'>
      <label htmlFor={id}>
        ${label}
        <input
          id={id}
          onChange={handleInput}
          className='text-input'
          type='text'
          placeholder={placeholder}
          aria-required={required}
          required={required}
          value={input}
        />
      </label>
    </div>
  );
};

export default FormFieldText;
