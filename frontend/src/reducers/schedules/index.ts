import {
    GET_SCHEDULES,
    GET_SCHEDULE,
    DELETE_SCHEDULE,
    CREATE_SCHEDULE,
    GET_SCHEDULES_ERROR,
    SCHEDULES_LOADING,
    SCHEDULES_UPDATING,
    UPDATE_SCHEDULE,
} from '../../actions/types';

export enum ScheduleStatus {
    Approved = 'Approved',
    Cancelled = 'Cancelled',
    Pending = 'Pending',
}

export interface ISchedule {
    _id?: string;
    propertyId: string;
    date: Date;
    time: string;
    comments: string;
    status: ScheduleStatus;
    userId: string;
}

export interface ISchedulesState {
    schedules: Array<ISchedule>;
    schedule: ISchedule;
    isLoading: boolean;
    isUpdating: boolean;
}

const initialState: ISchedulesState = {
    schedules: [],
    schedule: {
        _id: '',
        propertyId: '',
        date: new Date(),
        time: '',
        comments: '',
        status: ScheduleStatus.Pending,
        userId: '',
    },
    isLoading: false,
    isUpdating: false,
};

const schedulesReducer = (state: ISchedulesState = initialState, action: { type: string; data: any }) => {
    switch (action.type) {
        case SCHEDULES_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case GET_SCHEDULES:
            return {
                ...state,
                schedules: action.data,
                isLoading: false,
            };

        case GET_SCHEDULE:
            return {
                ...state,
                schedule: action.data,
                isLoading: false,
            };
        case DELETE_SCHEDULE:
            return {
                ...state,
                schedules: state.schedules.filter((schedule) => schedule._id !== action.data),
                isLoading: false,
            };
        case CREATE_SCHEDULE:
            return {
                ...state,
                schedules: [...state.schedules, action.data],
                isLoading: false,
            };
        case SCHEDULES_UPDATING:
            return {
                ...state,
                isUpdating: true,
            };
        case UPDATE_SCHEDULE:
            return {
                ...state,
                schedules: state.schedules.map((schedule) =>
                    schedule._id === action.data.schedule._id ? action.data.schedule : schedule,
                ),
                schedule: action.data.schedule,
                isUpdating: false,
            };

        case GET_SCHEDULES_ERROR:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default schedulesReducer;
