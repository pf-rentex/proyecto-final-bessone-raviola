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
            const { data } = await api.getProperties(buildQuery(filters));
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

const buildQuery = (filters?: any) => {
    let query = '?';
    if (filters) {
        if (filters.attributes) {
            Object.keys(filters.attributes).map((attrKey: any) => {
                query += `attributes[${attrKey}]=${filters.attributes[attrKey]}&`;
            });
        }
        if (filters.measurements) {
            Object.keys(filters.measurements).map((measurementKey: any) => {
                Object.keys(filters.measurements[measurementKey]).map(
                    (comparisonKey: any) => {
                        query += `measurements[${measurementKey}][${comparisonKey}]=${filters.measurements[measurementKey][comparisonKey]}&`;
                    },
                );
            });
        }
        if (filters.skip) {
            query += `skip=${filters.skip}`;
        }
        if (filters.limit) {
            query += `limit=${filters.limit}`;
        }
    }
    return query;
};
