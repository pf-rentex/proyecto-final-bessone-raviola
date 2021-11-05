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
            const { data } = await api.getProperties(
                buildQuery(filters ? filters : ''),
            );
            dispatch({ type: GET_PROPERTIES, data: data.properties });
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

const buildQuery = (initialObj: any) => {
    const reducer =
        (obj: any, parentPrefix = null) =>
        (prev: any, key: any) => {
            const val = obj[key];
            key = encodeURIComponent(key);
            const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key;

            if (val == null || typeof val === 'function') {
                prev.push(`${prefix}=`);
                return prev;
            }

            if (['number', 'boolean', 'string'].includes(typeof val)) {
                prev.push(`${prefix}=${encodeURIComponent(val)}`);
                return prev;
            }

            prev.push(
                Object.keys(val).reduce(reducer(val, prefix), []).join('&'),
            );
            return prev;
        };

    return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&');
};
