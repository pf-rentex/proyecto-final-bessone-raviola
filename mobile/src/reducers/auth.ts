import {
  AUTH_LOGIN,
  AUTH_REGISTER, LOAD_USER,
  LOGOUT,
  SET_LOGIN_ERROR,
  SET_SIGNUP_ERROR
} from "../constants/actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  register: {
    errors: string;
  }
  login: {
    errors: string;
  }
}

const initialState: IAuthState = {
  profile: null,
  isAuthenticated: false,
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
      setProfileToStorage({...action?.data});
      // @ts-ignore
      return {
        ...state,
        profile: action?.data,
        isAuthenticated: true,
      };

    case AUTH_LOGIN:
      (async () => {
        await setProfileToStorage({...action?.data});
      })()

      return {
        ...state,
        profile: action?.data,
        isAuthenticated: true,
      };

    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        profile: action?.data,
      }

    case SET_LOGIN_ERROR:
      return {
        ...state,
        login: {
          errors: action?.data,
        }
      };

    case SET_SIGNUP_ERROR:
      return {
        ...state,
        register: {
          errors: action?.data
        }
      };

    case LOGOUT:
      (async () => {
        await AsyncStorage.removeItem('profile');
      })();
      return {
        ...state,
        profile: null,
        isAuthenticated: false,
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
