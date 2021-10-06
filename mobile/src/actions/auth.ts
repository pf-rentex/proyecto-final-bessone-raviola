import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  LOAD_USER,
  LOGOUT,
  SET_LOGIN_ERROR,
  SET_SIGNUP_ERROR
} from "../constants/actionTypes";
import {Dispatch} from "redux";
// import {History} from 'history';
import * as api from '../api';
import {ILoginFormData} from "../screens/auth/Login";


// export const signup = (formData: IRegisterFormData, history: History) => async (dispatch: Dispatch<any>) => {
//   try {
//     const {data} = await api.register(formData);
//
//     dispatch({type: AUTH_REGISTER, data});
//     history.push('/onboarding');
//   } catch (error) {
//     const {msg} = error.response.data;
//
//     if (msg) {
//       const action = {
//         type: SET_SIGNUP_ERROR,
//         data: msg,
//       }
//       dispatch(action);
//     }
//   }
// }

// export const setSignupError = (message: string = '') => async (dispatch: Dispatch<any>) => {
//   const action = {
//     type: SET_SIGNUP_ERROR,
//     data: message,
//   }
//   dispatch(action);
// }

export const login = (formData: ILoginFormData, navigation) => async (dispatch: Dispatch<any>) => {
  try {
    const { data } = await api.authenticate(formData);

    dispatch({type: AUTH_LOGIN, data});
    navigation.navigate('Onboarding');
  } catch (error) {
    console.log(error);
    // const { msg } = error.response.data;
    //
    // if (msg) {
    //   const action = {
    //     type: SET_LOGIN_ERROR,
    //     data: msg,
    //   }
    //   dispatch(action);
    // }
  }
}

export const setLoginError = (message: string = '') => async (dispatch: Dispatch<any>) => {
  const action = {
    type: SET_LOGIN_ERROR,
    data: message,
  }
  dispatch(action);
}

export const loadUser = () => async (dispatch: Dispatch<any>) => {

  try {
    const { data } = await api.getUserData();

    dispatch({type: LOAD_USER, data});
  } catch (e) {
    console.log('error', e);
    dispatch({ type: LOGOUT });
  }
}

export const logout = () => async(dispatch: Dispatch<any>) => {
  console.log('being fired');
  dispatch({type: LOGOUT});
}
