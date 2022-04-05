import {
    GET_CLAIMS,
    GET_CLAIM,
    DELETE_CLAIM,
    CREATE_CLAIM,
    GET_CLAIMS_ERROR,
    CLAIMS_LOADING,
    UPDATE_CLAIM,
} from '../../actions/types';

export enum ClaimStatus {
    addressed = 'Addressed',
    inProgress = 'InProgress',
    cancelled = 'Cancelled',
    pending = 'Pending',
}

export enum ClaimCategory {
    electricity = 'Electricity',
    plumbing = 'Plumbing',
    infrastructure = 'Infrastructure',
}

export interface IClaim {
    _id?: string;
    title: string;
    description: string;
    address: string;
    technician: string;
    dateVisit: string;
    category: ClaimCategory;
    createdAt: string;
    status: ClaimStatus;
    propertyId: string;
    userId: string;
    claimPictures: Array<any>;
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
        title: '',
        description: '',
        address: '',
        technician: '',
        dateVisit: '',
        category: ClaimCategory.electricity,
        createdAt: '',
        status: ClaimStatus.pending,
        propertyId: '',
        userId: '',
        claimPictures: [],
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
        case CREATE_CLAIM:
            return {
                ...state,
                claims: [...state.claims, action.data],
                isLoading: false,
            };
        case UPDATE_CLAIM:
            return {
                ...state,
                claims: state.claims.map((claim) =>
                    claim._id === action.data.claim._id ? action.data : claim,
                ),
                claim: action.data.claim,
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
