import { Dispatch } from 'redux';
import * as api from '../../api';
import { GET_SCHEDULES_ERROR, SCHEDULES_LOADING, CREATE_SCHEDULE, CLEAR_ERRORS } from '../types';
import { getErrors } from '../error';
import { ISchedule } from '../../reducers/schedules/index';

export const createSchedule = (formData?: ISchedule) => async (dispatch: Dispatch<any>) => {
    console.log(formData);
    try {
        dispatch({ type: SCHEDULES_LOADING });
        const { data } = await api.createSchedule(formData);
        dispatch({ type: CREATE_SCHEDULE, data: data });
        dispatch({ type: CLEAR_ERRORS });
    } catch (error: any) {
        const { msg, status } = error.response.data;

        if (msg) {
            dispatch(getErrors(msg, status, GET_SCHEDULES_ERROR));
        }
        dispatch({
            type: GET_SCHEDULES_ERROR,
        });
    }
};
