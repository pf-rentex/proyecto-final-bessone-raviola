import { Dispatch } from 'redux';
import * as api from '../../api';
import {
    GET_CLAIMS,
    GET_CLAIM,
    DELETE_CLAIM,
    CREATE_CLAIM,
    GET_CLAIMS_ERROR,
    CLAIMS_LOADING,
    CLAIMS_UPDATING,
    CLEAR_ERRORS,
    UPDATE_CLAIM,
    SHOW_TOAST,
    CLEAR_TOAST,
} from '../types';
import { getErrors } from '../error';
import { IClaim } from '../../reducers/claims';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/all';

export const getClaims = (filters?: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({ type: CLAIMS_LOADING });
        const { data } = await api.getClaims();
        dispatch({ type: GET_CLAIMS, data: data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const { msg } = error.response.data;
        const { status } = error.response;

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
        dispatch({ type: CLEAR_TOAST });
        dispatch({ type: CLAIMS_LOADING });
        const { data } = await api.getClaim(id);
        dispatch({ type: GET_CLAIM, data: data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const { msg } = error.response.data;
        const { status } = error.response;

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
        dispatch({ type: CLEAR_TOAST });
        dispatch({ type: SHOW_TOAST, data: { msg: 'El reclamo se eliminó exitosamente', icon: 'success' } });
    } catch (error: any) {
        const { msg } = error.response.data;
        const { status } = error.response;

        if (msg) {
            dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
        }
        dispatch({
            type: GET_CLAIMS_ERROR,
        });
        dispatch({ type: CLEAR_TOAST });
        dispatch({
            type: SHOW_TOAST,
            data: { msg: 'Ocurrió un error al eliminar el reclamo, intente nuevamente', icon: 'error' },
        });
    }
};

export const createClaim = (formData: IClaim) => async (dispatch: Dispatch<any>) => {
    try {
        const requestData = formatData(formData);
        dispatch({ type: CLAIMS_LOADING });
        const { data } = await api.createClaim(requestData);
        dispatch({ type: CREATE_CLAIM, data: data });
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: CLEAR_TOAST });
        dispatch({
            type: SHOW_TOAST,
            data: { msg: 'El reclamo se creó exitosamente', icon: 'success' },
        });
    } catch (error: any) {
        console.log('error', error);
        const { msg } = error.response.data;
        const { status } = error.response;
        if (msg) {
            dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
        }
        dispatch({
            type: GET_CLAIMS_ERROR,
        });
        dispatch({ type: CLEAR_TOAST });
        dispatch({
            type: SHOW_TOAST,
            data: { msg: 'Ocurrió un error al crear el reclamo, intente nuevamente', icon: 'error' },
        });
    }
};

export const updateClaim = (formData: IClaim) => async (dispatch: Dispatch<any>) => {
    try {
        const requestData = formatData(formData);
        dispatch({ type: CLAIMS_UPDATING });
        const { data } = await api.updateClaim(requestData);
        dispatch({ type: UPDATE_CLAIM, data: data });
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: CLEAR_TOAST });
        dispatch({
            type: SHOW_TOAST,
            data: { msg: 'El reclamo se actualizó exitosamente', icon: 'success' },
        });
    } catch (error: any) {
        console.log('error', error);
        const { msg } = error.response.data;
        const { status } = error.response;

        if (msg) {
            dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
        }
        dispatch({
            type: GET_CLAIMS_ERROR,
        });
        dispatch({ type: CLEAR_TOAST });
        dispatch({
            type: SHOW_TOAST,
            data: { msg: 'Ocurrió un error al actualizar el reclamo, intente nuevamente', icon: 'error' },
        });
    }
};

const formatData = (requestData: any) => {
    const formData = new FormData();

    formData.append('bucketName', 'uploads-claim');

    Object.keys(requestData).map((key) => {
        if (!Array.isArray(requestData[key])) {
            formData.append(key, requestData[key]);
        } else {
            requestData[key].map((file: any) => {
                formData.append(key, file);
            });
        }
    });
    return formData;
};
