import { Ref, useEffect } from 'react';

export const genId = (prefix: string = '') => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;

export const useClickedOutside = (ref: Ref<any>, callback: Function) => {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            // @ts-ignore
            if (ref && ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        // Bind
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // dispose
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // @ts-ignore
    }, [ref, callback]);
};
