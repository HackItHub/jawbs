import React, { useState } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { AiFillWarning } from "react-icons/ai";
import { WARNING_STYLE } from "../../utils/Constants";
import Loading from "./Loading";

interface ChildProps {
  data: string[] | number[];
  listName: string;
  handleInput: (name: string, value) => void;
  placeholder: string;
  id: string;
  dataId: string;
  value?: any;
  type?: string;
  errorMessage?: string | undefined;
}

const DropDownMenu: React.FC<ChildProps> = ({
  data,
  listName,
  handleInput,
  placeholder,
  id,
  dataId,
  value,
  type,
  errorMessage,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState("");

  const handleDropDownMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptions = (inputValue: any) => {
    setIsOpen(!isOpen);
    setOption(inputValue);
    if (type === "number") {
      handleInput(dataId, Number(inputValue));
    } else {
      handleInput(dataId, inputValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, inputValue) => {
    if (event.key === "Enter" || event.key === " ") {
      handleOptions(inputValue);
    }
  };

  return (
    <div className='w-full'>
      <div
        className='form-input-container items-start label-text'
        role='presentation'
      >
        {listName}
      </div>
      <div
        className='relative inline-block text-left mb-2 w-full'
        id={listName.toLowerCase()}
      >
        <div>
          <button
            onClick={handleDropDownMenu}
            type='button'
            className={`flex w-full justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ${
              errorMessage
                ? "border-red border-2 border-solid"
                : "ring-1 ring-inset ring-gray-300"
            } hover:bg-gray-50`}
            id='menu-button'
            aria-expanded={isOpen}
            aria-haspopup='true'
          >
            {option ? (
              <div>{value}</div>
            ) : (
              <div className='text-[rgb(155,163,175)]'>{placeholder}</div>
            )}
            <svg
              className='-mr-1 h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        {errorMessage && (
          <div className='flex'>
            <AiFillWarning style={WARNING_STYLE} />
            <div className='text-red text-sm'>{errorMessage}</div>
          </div>
        )}
        <div
          className='absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <OverlayScrollbarsComponent defer>
            {isOpen && (
              <div className='overflow-y-auto' role='none'>
                {isOpen && !data.length && <Loading />}
                {data.map((item, index) => (
                  <div
                    onKeyDown={(e) => {
                      handleKeyDown(e, item);
                    }}
                    id={id}
                    role='menuitem'
                    key={`${listName}-${item}`}
                    className='dropdown-list-item hover:border-blue hover:bg-blue hover:bg-opacity-30 transition-all border-1 border-solid'
                    tabIndex={index}
                    onClick={() => handleOptions(item)}
                    data-value={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </OverlayScrollbarsComponent>
        </div>
      </div>
    </div>
  );
};

DropDownMenu.defaultProps = {
  value: "",
  errorMessage: "",
  type: "",
};

export default DropDownMenu;
