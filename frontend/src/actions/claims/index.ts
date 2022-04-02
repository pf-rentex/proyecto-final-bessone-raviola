import { Dispatch } from 'redux';
import * as api from '../../api';
import {
    GET_CLAIMS,
    GET_CLAIM,
    DELETE_CLAIM,
    GET_CLAIMS_ERROR,
    CLAIMS_LOADING,
    CLEAR_ERRORS,
} from '../types';
import { getErrors } from '../error';

export const getClaims = (filters?: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: CLAIMS_LOADING });
        const { data } = await api.getClaims();
        dispatch({ type: GET_CLAIMS, data: data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const { msg, status } = error.response.data;

        if (msg) {
            dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
        }
        dispatch({
            type: GET_CLAIMS_ERROR,
        });
    }
};

export const getClaim = (id: string) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: CLAIMS_LOADING });
        const { data } = await api.getClaim(id);
        dispatch({ type: GET_CLAIM, data: data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const { msg, status } = error.response.data;

        if (msg) {
            dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
        }
        dispatch({
            type: GET_CLAIMS_ERROR,
        });
    }
};

export const deleteClaim = (id: string) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: CLAIMS_LOADING });
        const { data } = await api.deleteClaim(id);
        dispatch({ type: DELETE_CLAIM, data: id });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const { msg, status } = error.response.data;

        if (msg) {
            dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
        }
        dispatch({
            type: GET_CLAIMS_ERROR,
        });
    }
};
