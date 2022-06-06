import React from 'react';
import { SHOW_TOAST, CLEAR_TOAST } from '../actions/types';

export interface IToast {
    msg: string | null;
    icon: React.ReactNode | null | string;
}

const initialState: IToast = {
    msg: null,
    icon: null,
};

const toastReducer = (
    state = initialState,
    action: {
        type: string;
        data: IToast;
    },
) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                msg: action.data.msg,
                icon: action.data.icon,
            };
        case CLEAR_TOAST:
            return {
                msg: null,
                icon: null,
            };
        default:
            return state;
    }
};

export default toastReducer;
