import {
    GET_CLAIMS,
    GET_CLAIMS_ERROR,
    CLAIMS_LOADING,
} from '../../actions/types';

export enum ClaimStatus {
    addressed = 'Atendido',
    inProgress = 'En curso',
    cancelled = 'Cancelado',
}

export interface IClaim {
    icon: React.ReactNode;
    title: string;
    category: string;
    date: string;
    status: ClaimStatus;
}

export interface IClaimsState {
    claims: Array<IClaim>;
    isLoading: boolean;
}

const initialState: IClaimsState = {
    claims: [],
    isLoading: false,
};

const claimsReducer = (
    state: IClaimsState = initialState,
    action: { type: string; data: Array<IClaim> },
) => {
    switch (action.type) {
        case CLAIMS_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_CLAIMS:
            return {
                ...state,
                claims: action.data,
                isLoading: false,
            };

        case GET_CLAIMS_ERROR:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default claimsReducer;
