import {
    GET_CLAIMS,
    GET_CLAIM,
    DELETE_CLAIM,
    GET_CLAIMS_ERROR,
    CLAIMS_LOADING,
} from '../../actions/types';

export enum ClaimStatus {
    addressed = 'Atendido',
    inProgress = 'En curso',
    cancelled = 'Cancelado',
    pending = 'Pendiente',
}

export enum ClaimCategory {
    electricity = 'Electricity',
    plumbing = 'Plumbing',
    infrastructure = 'Infrastructure',
}

export interface IClaim {
    _id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    address: string;
    technician: string;
    category: string;
    createdAt: string;
    status: ClaimStatus;
}

export interface IClaimsState {
    claims: Array<IClaim>;
    claim: IClaim;
    isLoading: boolean;
}

const initialState: IClaimsState = {
    claims: [],
    claim: {
        _id: '',
        icon: null,
        title: '',
        description: '',
        address: '',
        technician: '',
        category: '',
        createdAt: '',
        status: ClaimStatus.pending,
    },
    isLoading: false,
};

const claimsReducer = (
    state: IClaimsState = initialState,
    action: { type: string; data: any },
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

        case GET_CLAIM:
            return {
                ...state,
                claim: action.data,
                isLoading: false,
            };
        case DELETE_CLAIM:
            return {
                ...state,
                claims: state.claims.filter(
                    (claim) => claim._id !== action.data,
                ),
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
