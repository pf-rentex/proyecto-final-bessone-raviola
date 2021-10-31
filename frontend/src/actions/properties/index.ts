import { Dispatch } from 'redux';
import * as api from '../../api';
import {
    GET_PROPERTIES,
    GET_PROPERTIES_ERROR,
    PROPERTIES_LOADING,
    CLEAR_ERRORS,
} from '../types';
import { getErrors } from '../error';

export const getProperties =
    (filters?: any) => async (dispatch: Dispatch<any>) => {
        try {
            dispatch({ type: PROPERTIES_LOADING });
            const { data } = await api.getProperties(filters);
            dispatch({ type: GET_PROPERTIES, data });
            dispatch({ type: CLEAR_ERRORS });
        } catch (error: any) {
            const { msg, status } = error.response.data;

            if (msg) {
                dispatch(getErrors(msg, status, GET_PROPERTIES_ERROR));
            }
            dispatch({
                type: GET_PROPERTIES_ERROR,
            });
        }
    };
