import {CLEAR_ERRORS, GET_ERRORS} from "../types";

export const returnErrors = (msg: string, status: number, id: string | null = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
