import {Dispatch} from 'redux';
import * as api from '../../api';
import {ILoginFormData} from '../../screens/auth/Login';
import {IRegisterFormData} from '../../screens/auth/Register/RegisterStepTwo';
import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTHENTICATING,
} from '../types';
import {getErrors} from '../error';

export const signup =
  (formData: IRegisterFormData, navigation: any) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch({type: AUTHENTICATING});

      const {data} = await api.register(formData);
      dispatch({type: REGISTER_SUCCESS, data});
      dispatch({type: CLEAR_ERRORS});
      navigation.navigate('Onboarding');
    } catch (error) {
      const {msg, status} = error.response.data;

      if (msg) {
        dispatch(getErrors(msg, status, REGISTER_FAIL));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const login =
  (formData: ILoginFormData, navigation: any) =>
  async (dispatch: Dispatch<any>) => {
    try {
      dispatch({type: AUTHENTICATING});
      const {data} = await api.authenticate(formData);

      dispatch({type: LOGIN_SUCCESS, data});
      dispatch({type: CLEAR_ERRORS});
      navigation.navigate('UserProfile');
    } catch (error) {
      const {data, status} = error.response;
      dispatch(getErrors(data.msg, status, LOGIN_FAIL));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const loadUser = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({type: USER_LOADING});
    const {data} = await api.getUserData();
    dispatch({type: USER_LOADED, payload: data});
  } catch (e) {
    console.log('Error loading user: ', e);
    dispatch({type: AUTH_ERROR});
  }
};

export const logout = () => (dispatch: Dispatch<any>) => {
  dispatch({type: LOGOUT_SUCCESS});
};
