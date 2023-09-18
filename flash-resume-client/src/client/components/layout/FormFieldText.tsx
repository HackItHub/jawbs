import React from "react";

interface Props {
  placeholder: string;
  isRequired?: boolean;
  label: string;
  onChange: (name: string, value: string) => void;
  id: string;
  type?: string;
  dataId: string;
  value?: any;
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
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    onChange(dataId, inputValue);
  };

  const handleTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: inputValue } = e.target;
    onChange(dataId, inputValue);
  };

  return (
    <div className='mb-2'>
      {type === "textarea" ? (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <textarea
            id={id}
            onChange={handleTextAreaInput}
            className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-input'
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            value={value}
          />
        </label>
      ) : (
        <label htmlFor={id} className='form-input-container'>
          <div className='label-text'>{label}</div>
          <input
            id={id}
            onChange={handleInput}
            className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-input'
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            value={value}
            type={type}
          />
        </label>
      )}
    </div>
  );
};

FormFieldText.defaultProps = {
  type: "text",
  isRequired: false,
  value: "",
};

export default FormFieldText;
