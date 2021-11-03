import {
  GET_PROPERTIES,
  GET_PROPERTIES_ERROR,
  PROPERTIES_LOADING,
} from '../../actions/types';

export interface IProperty {
  address: String;
  description: String;
  city: String;
  province: String;
  price: Number;
}

export interface IPropertiesState {
  properties: Array<IProperty>;
  isLoading: boolean;
}

const initialState: IPropertiesState = {
  properties: [],
  isLoading: false,
};

const propertiesReducer = (
  state: IPropertiesState = initialState,
  action: {type: string; data: Array<IProperty>},
) => {
  switch (action.type) {
    case PROPERTIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROPERTIES:
      return {
        ...state,
        properties: action.data,
        isLoading: false,
      };

    case GET_PROPERTIES_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default propertiesReducer;
