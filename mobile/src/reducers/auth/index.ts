import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS, REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from "../../actions/types";

export interface IProfileData {
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
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: IAuthState = {
  profile: null,
  isAuthenticated: false,
  isLoading: false,
};

const authReducer = (state: IAuthState = initialState, action: { type: string; data: IProfileData }) => {

  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        profile: action.data,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      (async () => {
        await setProfileToStorage({...action?.data});
      })()
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        isLoading: false,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      (async () => {
        await AsyncStorage.removeItem('profile');
      })();
      return {
        ...state,
        profile: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
}

const setProfileToStorage = async (data: IProfileData) => {
  try {
    await AsyncStorage.setItem('profile', JSON.stringify(data))
  } catch (e) {
    console.warn('Error saving profile data to AsyncStorage', e);
  }
}

export default authReducer;
