import {
    CREATE_RENTAL_REQUEST,
    CREATE_RENTAL_REQUEST_ERROR,
    RENTAL_REQUEST_LOADING,
} from '../../actions/types';

export interface IRentState {
    isLoading: boolean;
}

const initialState: IRentState = {
    isLoading: false,
};

const rentReducer = (
    state: IRentState = initialState,
    action: { type: string; data: any },
) => {
    switch (action.type) {
        case CREATE_RENTAL_REQUEST:
            return {
                ...state,
                isLoading: false,
            };
        case CREATE_RENTAL_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case RENTAL_REQUEST_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }

        default:
            return state;
    }
};

export default rentReducer;
