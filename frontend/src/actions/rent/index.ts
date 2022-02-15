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

    //Hardcoded values required by backend (remove when fetching this fields correctly)
    formData.append('bucketName', 'uploads-rental-request');
    formData.append('userId', '615cc9d2c4152a55438e9151');
    formData.append('propertyId', '6193f2b7e3b4f88e4a490644');

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
