import React, { useState } from "react";

interface ChildProps {
  data: [];
  listName: string;
  handleInput: (name: string, value: string) => void;
}

const DropDownMenu: React.FC<ChildProps> = ({
  data,
  listName,
  handleInput,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDownMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptions = (value: string) => {
    handleInput(listName, value);
  };

  const handleKeyDown = (event: React.KeyboardEvent, value: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleOptions(value);
    }
  };

  return (
    <div
      className='relative inline-block text-left'
      id={listName.toLowerCase()}
    >
      <div>
        <button
          onClick={handleDropDownMenu}
          type='button'
          className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          id='menu-button'
          aria-expanded={isOpen}
          aria-haspopup='true'
        >
          {listName}
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
        className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex={-1}
      >
        <div className='py-1' role='none'>
          {data.map((item: any, index) => (
            <div
              onKeyDown={(e) => {
                handleKeyDown(e, item);
              }}
              role='menuitem'
              key={`${listName}-${item}`}
              className='text-gray-700 block px-4 py-2 text-sm'
              tabIndex={index}
              onClick={() => handleOptions(item)}
              data-value={item}
              id={`${listName}-${item}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
