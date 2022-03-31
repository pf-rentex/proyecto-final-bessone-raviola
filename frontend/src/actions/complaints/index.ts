import { Dispatch } from 'redux';
import * as api from '../../api';
import {
    GET_COMPLAINTS,
    GET_COMPLAINTS_ERROR,
    COMPLAINTS_LOADING,
    CLEAR_ERRORS,
} from '../types';
import { getErrors } from '../error';

export const getComplaints =
    (filters?: any) => async (dispatch: Dispatch<any>) => {
        try {
            dispatch({ type: COMPLAINTS_LOADING });
            const { data } = await api.getComplaints();
            dispatch({ type: GET_COMPLAINTS, data: data });
            dispatch({ type: CLEAR_ERRORS });
        } catch (error: any) {
            const { msg, status } = error.response.data;

            if (msg) {
                dispatch(getErrors(msg, status, GET_COMPLAINTS_ERROR));
            }
            dispatch({
                type: GET_COMPLAINTS_ERROR,
            });
        }
    };
