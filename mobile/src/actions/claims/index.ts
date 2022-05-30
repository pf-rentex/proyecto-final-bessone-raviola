import {Dispatch} from 'redux';
import * as api from '../../api';
import {
  GET_CLAIMS,
  GET_CLAIMS_ERROR,
  CLAIMS_LOADING,
  CLEAR_ERRORS,
} from '../types';
import {getErrors} from '../error';

export const getClaims = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({type: CLAIMS_LOADING});
    const {data} = await api.getClaims();
    dispatch({type: GET_CLAIMS, data: data});
    dispatch({type: CLEAR_ERRORS});
  } catch (error: any) {
    const {msg, status} = error.response.data;
    if (msg) {
      dispatch(getErrors(msg, status, GET_CLAIMS_ERROR));
    }
    dispatch({
      type: GET_CLAIMS_ERROR,
    });
  }
};
