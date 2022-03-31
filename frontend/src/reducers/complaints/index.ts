import {
    GET_COMPLAINTS,
    GET_COMPLAINTS_ERROR,
    COMPLAINTS_LOADING,
} from '../../actions/types';

export enum ComplaintStatus {
    addressed = 'Atendido',
    inProgress = 'En curso',
    cancelled = 'Cancelado',
}

export interface IComplaint {
    icon: React.ReactNode;
    title: string;
    category: string;
    date: string;
    status: ComplaintStatus;
}

export interface IComplaintsState {
    complaints: Array<IComplaint>;
    isLoading: boolean;
}

const initialState: IComplaintsState = {
    complaints: [],
    isLoading: false,
};

const complaintsReducer = (
    state: IComplaintsState = initialState,
    action: { type: string; data: Array<IComplaint> },
) => {
    switch (action.type) {
        case COMPLAINTS_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_COMPLAINTS:
            return {
                ...state,
                complaints: action.data,
                isLoading: false,
            };

        case GET_COMPLAINTS_ERROR:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default complaintsReducer;
