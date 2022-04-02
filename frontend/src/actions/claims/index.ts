import { Dispatch } from 'redux';
import * as api from '../../api';
import {
    GET_CLAIMS,
    GET_CLAIM,
    DELETE_CLAIM,
    CREATE_CLAIM,
    GET_CLAIMS_ERROR,
    CLAIMS_LOADING,
    CLEAR_ERRORS,
} from '../types';
import { getErrors } from '../error';
import { IClaim } from '../../reducers/claims';
import { ClaimStatus } from '../../reducers/claims';

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

export const createClaim =
    (formData: IClaim) => async (dispatch: Dispatch<any>) => {
        try {
            //DATOS HARDCODEADOS, QUITAR CUANDO SE VINCULE EL RECLAMO A UN USER Y PROPIEDAD
            formData['propertyId'] = '619947dd6f77679edc5bd7ec';
            formData['userId'] = '6158ee0fbee2d07b0bcdb2f4';
            formData['status'] = ClaimStatus.pending;
            formData['address'] = 'Belgrano 2624';
            formData['technician'] = 'Técnico';
            formData['picturesClaim'] = {};

            console.log('FormData', formData);
            dispatch({ type: CLAIMS_LOADING });
            const { data } = await api.createClaim(formData);
            dispatch({ type: CREATE_CLAIM, data: data });
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
