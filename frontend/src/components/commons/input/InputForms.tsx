import React from 'react';

interface IInputFormsProps {
    color?: string;
    placeholder?: string;
}

export const InputForms = ({
    color = 'alt',
    placeholder = '',
}: IInputFormsProps) => {
    return (
        <div>
            <input
                type="text"
                name="GenericInput"
                className={`px-5 placeholder-gray-400 bg-${color}-100 text-gray-900 rounded text-md font-medium shadow focus:outline-none focus:shadow w-6/12 h-12`}
                placeholder={`${placeholder}`}
            />
        </div>
    );
};

export default InputForms;
