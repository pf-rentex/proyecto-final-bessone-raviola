import { Dispatch } from 'redux';
import * as api from '../../api';
import {
    CREATE_RENTAL_REQUEST,
    CREATE_RENTAL_REQUEST_ERROR,
    RENTAL_REQUEST_LOADING,
} from '../types';
import { getErrors } from '../error';

export const createRentalRequest =
    (requestData?: any) => async (dispatch: Dispatch<any>) => {
        dispatch({ type: RENTAL_REQUEST_LOADING });
        try {
            const formData = formatData(requestData);
            const { data } = await api.createRentalRequest(formData);
            dispatch({ type: CREATE_RENTAL_REQUEST, data: data });
        } catch (error: any) {
            const { msg, status } = error.response.data;

            if (msg) {
                dispatch(getErrors(msg, status, CREATE_RENTAL_REQUEST_ERROR));
            }
            dispatch({
                type: CREATE_RENTAL_REQUEST_ERROR,
            });
        }
    };

const formatData = (requestData: any) => {
    const formData = new FormData();

    Object.keys(requestData).map((key) => {
        if (
            key !== 'guarantorFiles' &&
            key !== 'dniFiles' &&
            key !== 'receiptFiles'
        ) {
            formData.append(key, requestData[key]);
        }
    });

    requestData['guarantorFiles'].map((file: any) => {
        formData.append('guarantorFiles', file);
    });
    requestData['dniFiles'].map((file: any) => {
        formData.append('dniFiles', file);
    });
    requestData['receiptFiles'].map((file: any) => {
        formData.append('receiptFiles', file);
    });

    return formData;
};
