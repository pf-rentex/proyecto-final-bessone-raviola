import React from 'react';
import PropTypes from 'prop-types';

interface IButtonProps {
  color?: 'primary' | 'secondary';
  text: string;
  children?: React.ReactNode;
}

const Button = ({color= 'primary', text = '', children = <></>}: IButtonProps) => {
    return (
        <button className={`bg-${color} shadow-md w-full rounded-md px-5 py-2 flex content-center my-5 focus:shadow-sm outline-none`}>
            <span className="text-2xl pr-4">
                {children}
            </span>
            <span className={`text-md font-medium text-center text-${color === 'primary' ? 'white' : 'gray-800'} flex-1`}>{text}</span>
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Button;
