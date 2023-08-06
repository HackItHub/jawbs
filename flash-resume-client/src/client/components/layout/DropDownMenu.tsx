import React, { useState } from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Loading from "./Loading";

interface ChildProps {
  data: string[];
  listName: string;
  handleInput: (name: string, value: string) => void;
  placeholder: string;
}

const DropDownMenu: React.FC<ChildProps> = ({
  data,
  listName,
  handleInput,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState("");

  const handleDropDownMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptions = (value: string) => {
    setIsOpen(!isOpen);
    setOption(value);
    handleInput(listName, value);
  };

  const handleKeyDown = (event: React.KeyboardEvent, value: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleOptions(value);
    }
  };

  return (
    <div
      className='relative inline-block text-left mb-2'
      id={listName.toLowerCase()}
    >
      <div>
        <button
          onClick={handleDropDownMenu}
          type='button'
          className='flex w-full justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          id='menu-button'
          aria-expanded={isOpen}
          aria-haspopup='true'
        >
          {option.length ? (
            <div>{option}</div>
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
      <div
        className='absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex={-1}
      >
        <OverlayScrollbarsComponent defer>
          {isOpen && (
            <div className='py-1 max-h-96 overflow-y-auto' role='none'>
              {isOpen && !data.length && <Loading />}
              {data.map((item, index) => (
                <div
                  onKeyDown={(e) => {
                    handleKeyDown(e, item);
                  }}
                  role='menuitem'
                  key={`${listName}-${item}`}
                  className='dropdown-list-item hover:border-blue hover:bg-blue hover:bg-opacity-30 transition-all border-1'
                  tabIndex={index}
                  onClick={() => handleOptions(item)}
                  data-value={item}
                  id={`${listName}-${item}`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};

export default DropDownMenu;
