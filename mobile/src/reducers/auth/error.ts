import {CLEAR_ERRORS, GET_ERRORS} from '../../actions/types';

export interface IError {
  msg: unknown;
  status: number | null;
  id: undefined | null;
}

const initialState: IError = {
  msg: {},
  status: null,
  id: null,
};

const errorReducer = (
    state = initialState,
    action: {
      type: string;
      data: { msg: any, status: number; id: string; }
    }) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.data.msg,
        status: action.data.status,
        id: action.data.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default errorReducer;

