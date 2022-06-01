import React from 'react';
import PropTypes from 'prop-types';

interface ILabelProps {
    color?: string;
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
            className={`bg-alt bg-${disabled ? 'gray-400' : outlined && 'transparent'} ${color && `bg-${color}-300`}
             shadow-lg  flex justify-center rounded-md px-3 py-1 flex content-center focus:shadow-sm font-secondary font-semibold outline-none align-items-center justify-center content-center align-middle justify-items-center items-center ${
                 outlined ? `border border-${color}` : ''
             }`}
        >
            <span className={`text-2xl ${children ? 'pr-4' : ''}`}>{children}</span>
            <span
                className={`text-xs  text-${
                    outlined ? color : color === 'primary' || color === 'alt' ? 'white' : 'gray-800'
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
