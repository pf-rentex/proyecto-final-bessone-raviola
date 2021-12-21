import React from 'react';
import PropTypes from 'prop-types';

interface ILabelProps {
    color?: 'primary' | 'secondary' | 'alt';
    text: string;
    outlined?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
}

const CustomLabel = ({
    color = 'primary',
    text = '',
    outlined = false,
    disabled = false,
    children = null,
}: ILabelProps) => {
    return (
        <label
            className={`bg-${
                disabled ? 'gray-400' : outlined ? 'transparent' : color
            } 
             shadow-lg w-full rounded-md px-5 py-2 flex content-center my-3 focus:shadow-sm font-secondary font-semibold outline-none align-items-center justify-center content-center align-middle justify-items-center items-center ${
                 outlined ? `border border-${color}` : ''
             }`}
        >
            <span className={`text-2xl ${children ? 'pr-4' : ''}`}>
                {children}
            </span>
            <span
                className={`text-sm font-sm  text-${
                    outlined
                        ? color
                        : color === 'primary' || color === 'alt'
                        ? 'white'
                        : 'gray-800'
                } flex-1`}
            >
                {text}
            </span>
        </label>
    );
};

CustomLabel.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default CustomLabel;
