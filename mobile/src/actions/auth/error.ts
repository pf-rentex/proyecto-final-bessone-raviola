import {CLEAR_ERRORS, GET_ERRORS} from '../types';

export const getErrors = (
  msg: string,
  status: number,
  id: string | null = null,
) => {
  return {
    type: GET_ERRORS,
    data: {msg, status, id},
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
