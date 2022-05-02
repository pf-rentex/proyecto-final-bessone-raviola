import React from 'react';

interface ILoaderProps {
    size?: number;
}
const Loader = ({ size = 5 }: ILoaderProps) => {
    return (
        <div className="flex justify-center items-center">
            <div
                style={{ borderTopColor: 'transparent' }}
                className={`w-${size} h-${size} border-4 border-blue-400 border-solid rounded-full animate-spin`}
            ></div>
        </div>
    );
};

export default Loader;
