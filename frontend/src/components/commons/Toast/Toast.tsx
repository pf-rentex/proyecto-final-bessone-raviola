import React, { useEffect, useState } from 'react';
interface IToastProps {
    icon: React.ReactNode;
    message: string;
    duration: number;
}

const Toast = ({ icon, message, duration }: IToastProps) => {
    const [translate, setTranslate] = useState<string>('translate-x-full');
    const [scale, setScale] = useState<string>('scale-x-0');

    useEffect(() => {
        setTimeout(() => {
            setTranslate('-translate-x-0');
            setScale('scale-x-100');
        }, 5);
        setTimeout(() => {
            setTranslate('translate-x-full');
            setScale('scale-x-0');
        }, duration);
    }, []);

    return (
        <div
            id="toast-simple"
            className={`flex items-center w-full relative p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition ease-in-out delay-150 ${translate} ${scale}`}
            role="alert"
        >
            {icon}
            <div className="pl-4 text-sm font-normal">{message}</div>
        </div>
    );
};

export default Toast;
