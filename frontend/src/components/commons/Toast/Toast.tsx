import React, { useEffect, useState } from 'react';
interface IToastProps {
    icon: React.ReactNode;
    message: string;
    duration: number;
}

const Toast = ({ icon, message, duration }: IToastProps) => {
    const [translate, setTranslate] = useState<string>('translate-x-full scale-0');

    useEffect(() => {
        setTimeout(() => {
            setTranslate('-translate-x-0 scale-100');
        }, 5);
        setTimeout(() => {
            setTranslate('translate-x-full scale-0');
        }, duration);
    }, []);

    return (
        <div
            id="toast-simple"
            className={`flex items-center w-4/12 absolute ${translate} right-10 p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition ease-in-out duration-500`}
            role="alert"
        >
            {icon}
            <div className="pl-4 text-sm font-normal">{message}</div>
        </div>
    );
};

export default Toast;
