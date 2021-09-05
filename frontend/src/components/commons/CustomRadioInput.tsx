import React, {useEffect, useState} from 'react';

interface ICustomCheckboxProps {
  id: string;
  name: string;
  isChecked: boolean;
  onSelect: Function;
  text: string;
}

const CustomRadioInput = ({id, name, isChecked, onSelect, text}: ICustomCheckboxProps) => {

  return (
      <div onClick={() => onSelect()}
          className={`rounded-lg flex w-36 h-10 px-2 py-2 my-2 mx-2 ${isChecked ? 'bg-blue-500 shadow-inner-xl': 'bg-gray-300 shadow-lg' } place-content-center cursor-pointer hover:opacity-75`}>
        <input type="radio"
               name={name}
               className="hidden w-0"
               id={id}
               value={id}
               onChange={() => onSelect()}
               checked={isChecked}
               hidden/>
        <span className={`select-none radio text-left text-xs leading-4 font-bold ${isChecked ? 'text-gray-100': 'text-gray-900' } self-center text-start rounded-lg`}>
          { text }
        </span>
      </div>
  );
};

export default CustomRadioInput;
