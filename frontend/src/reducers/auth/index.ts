import {
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
} from '../../actions/types';

export interface IProfileData {
    token: string;
    user: {
        id: string;
        email: string;
        type: string;
    };
    email: string;
    id: string;
    userType: string;
}

export interface IAuthState {
    profile: null | IProfileData;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const initialState: IAuthState = {
    profile: null,
    isAuthenticated: false,
    isLoading: true,
};

const authReducer = (state: IAuthState = initialState, action: { type: string; data: IProfileData }) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case USER_LOADED:
            setProfileToStorage({ ...action?.data });
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                profile: action.data.user,
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            setProfileToStorage({ ...action?.data });
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
                profile: action.data.user,
                isLoading: false,
            };

        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('profile');
            localStorage.removeItem('token');
            return {
                ...state,
                profile: null,
                isAuthenticated: false,
                isLoading: false,
            };

        default:
            return state;
    }
};

const setProfileToStorage = (data: IProfileData) => {
    const { token } = data;
    try {
        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
        }
        localStorage.setItem('profile', JSON.stringify(data));
    } catch (e) {
        console.warn('Error saving profile data to LocalStorage', e);
    }
};

export default authReducer;
