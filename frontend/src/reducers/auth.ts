import {AUTH_REGISTER, AUTH_LOGIN, LOGOUT, SET_LOGIN_ERROR, SET_SIGNUP_ERROR} from "../constants/actionTypes";

interface IProfileData {
  token: string;
  user: {
    id: string;
    email: string;
    type: string;
  };
  email: string;
  id: string;
  type: string;
}

export interface IAuthState {
  profile: null | IProfileData;
  register: {
    errors: string;
  }
  login: {
    errors: string;
  }
}

const initialState: IAuthState = {
  profile: null,
  register: {
    errors: '',
  },
  login: {
    errors: '',
  }
};

const authReducer = (state: IAuthState = initialState, action: { type: string; data: IProfileData }) => {

  switch (action.type) {

    case AUTH_REGISTER:
      console.log('here my man')
      console.log(action.data);
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      // @ts-ignore
      return {...state, profile: action?.data};

    case AUTH_LOGIN:
      console.log('response was', action?.data);
      console.log({action});
      return {...state, profile: action?.data};

    case SET_LOGIN_ERROR:
      return {...state, login: { errors: action?.data } };

    case SET_SIGNUP_ERROR:
      return {...state, register: { errors: action?.data } };

    case LOGOUT:
      localStorage.clear();
      return {...state, authData: null };

    default:
      return state;
  }
}

export default authReducer;
