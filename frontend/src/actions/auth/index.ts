import { Dispatch } from 'redux';
import * as api from '../../api';
import { History } from 'history';

import {
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
} from '../types';
import { getErrors } from '../error';
import { IRegisterFormData } from '../../components/auth/SignupBox';
import { ILoginFormData } from '../../components/auth/LoginBox';

export const signup = (formData: IRegisterFormData) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: USER_LOADING });

        const { data } = await api.register(formData);
        dispatch({ type: REGISTER_SUCCESS, data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const {
            data: { msg },
            status,
        } = error.response;

        if (msg) {
            dispatch(getErrors(msg, status, REGISTER_FAIL));
        }
        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

export const login = (formData: ILoginFormData, history: History) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: USER_LOADING });
        const { data } = await api.authenticate(formData);

        dispatch({ type: LOGIN_SUCCESS, data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        if (error.response) {
            const { data, status } = error.response;
            dispatch(getErrors(data.msg, status, LOGIN_FAIL));
        }
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const loadUser = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: USER_LOADING });
        const { data } = await api.getUserData();
        dispatch({ type: USER_LOADED, data });
    } catch (e) {
        dispatch({ type: AUTH_ERROR });
    }
};

export const updateUser = (formData: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: USER_LOADING });
        await api.updateUserData(formData);
    } catch (e) {
        console.log('Error updating user: ', e);
        dispatch({ type: AUTH_ERROR });
    }
};

export const logout = () => (dispatch: Dispatch<any>) => {
    dispatch({ type: LOGOUT_SUCCESS });
};
