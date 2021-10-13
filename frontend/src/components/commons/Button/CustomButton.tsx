import React from 'react';
import PropTypes from 'prop-types';

interface IButtonProps {
  color?: "primary" | "secondary" | "alt";
  text: string;
  disabled?: boolean;
  callback?: Function;
  children?: React.ReactNode;
}

const CustomButton = ({
  color = "primary",
  text = "",
  disabled = false,
      callback = () => null,
      children = <></>,
    }: IButtonProps ) => {

  const onClicked = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (callback && !disabled) {
      callback();
    }
  }
  return (
      <button onClick={onClicked}
              className={`bg-${disabled ? 'gray-400' : color}${disabled ? 'cursor-not-allowed': ''} shadow-md w-full rounded-md px-5 py-2 flex content-center my-3 focus:shadow-sm outline-none align-items-center justify-center content-center align-middle justify-items-center items-center`}
    >
      <span className="text-2xl pr-4">{children}</span>
      <span
        className={`text-sm font-sm  text-${
          color === "primary" || color === "alt" ? "white" : "gray-800"
        } flex-1`}
      >
        {text}
      </span>
    </button>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CustomButton;
