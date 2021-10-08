import {AUTH_REGISTER, LOGOUT, SET_SIGNUP_ERROR} from "../../constants/actionTypes";
import {Dispatch} from "redux";
import * as api from '../../api';
import {ILoginFormData} from "../../screens/auth/Login";
import {IRegisterFormData} from "../../screens/auth/Register/RegisterStepTwo";
import {AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED, USER_LOADING} from "../types";
import {returnErrors} from "./error";


export const signup = (formData: IRegisterFormData, navigation: any) => async (dispatch: Dispatch<any>) => {
  try {
    const {data} = await api.register(formData);
    dispatch({type: AUTH_REGISTER, data});
    navigation.navigate('Onboarding');
  } catch (error) {
    const {msg} = error.response.data;

    if (msg) {
      const action = {
        type: SET_SIGNUP_ERROR,
        data: msg,
      }
      dispatch(action);
    }
  }
}

// export const setSignupError = (message: string = '') => async (dispatch: Dispatch<any>) => {
//   const action = {
//     type: SET_SIGNUP_ERROR,
//     data: message,
//   }
//   dispatch(action);
// }

export const login = (formData: ILoginFormData, navigation: any) => async (dispatch: Dispatch<any>) => {
  try {
    const {data} = await api.authenticate(formData);

    dispatch({type: LOGIN_SUCCESS, data});
    navigation.navigate('Onboarding');
  } catch (error) {
    const {data, status} = error;
    dispatch(
        returnErrors(data, status, LOGIN_FAIL)
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
}

// export const setLoginError = (message: string = '') => async (dispatch: Dispatch<any>) => {
//   const action = {
//     type: SET_LOGIN_ERROR,
//     data: message,
//   }
//   dispatch(action);
// }

export const loadUser = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({type: USER_LOADING});
    const {data} = await api.getUserData();
    dispatch({type: USER_LOADED, payload: data});
  } catch (e) {
    console.log('Error loading user: ', e);
    dispatch({type: AUTH_ERROR});
  }
}

export const logout = () => (dispatch: Dispatch<any>) => {
  dispatch({type: LOGOUT});
}
