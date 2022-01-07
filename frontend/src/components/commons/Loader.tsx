import React from 'react';
const Loader = () => {
    return (
        <div>
            <div
                style={{ borderTopColor: 'transparent' }}
                className="w-8 h-8 border-4 border-blue-400 border-solid rounded-full animate-spin"
            ></div>
        </div>
    );
};

export default Loader;
