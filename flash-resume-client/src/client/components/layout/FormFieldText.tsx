import React, { useState } from "react";

interface Props {
  placeholder: string;
  required: boolean | undefined;
}

const FormFieldText: React.FC<Props> = ({ placeholder, required }) => {
  const [input, setInput] = useState("");
  return (
    <input
      onChange={(e) => setInput(e.target.value)}
      className='text-input'
      type='text'
      placeholder={placeholder}
      aria-required={required}
      required={required}
      value={input}
    />
  );
};

export default FormFieldText;
