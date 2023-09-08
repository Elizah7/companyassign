// src/reducers/dataReducer.js

import { GET_DATABYPAIR_FAILURE, GET_DATABYPAIR_REQUEST, GET_DATABYPAIR_SUCCESS, GET_DATABYTOKEN_FAILURE, GET_DATABYTOKEN_REQUEST, GET_DATABYTOKEN_SUCCESS,  } from './actiontype';

const initialState = {
    isLoading : false,
  tokenData: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATABYTOKEN_REQUEST:
      return {
        ...state,
        isLoading : true,
        error: null,
      };
      case GET_DATABYTOKEN_SUCCESS:
        return {
          ...state,
          isLoading : true,
          tokenData:action.payload 
        };
    case GET_DATABYTOKEN_FAILURE:
      return {
        ...state,
        tokenData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState2 = {
    isLoading : false,
  tokenData: null,
  error: null,
};

export const dataReducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case GET_DATABYPAIR_REQUEST:
      return {
        ...state,
        isLoading : true,
        error: null,
      };
      case GET_DATABYPAIR_SUCCESS:
        return {
          ...state,
          isLoading : true,
          tokenData:action.payload 
        };
    case GET_DATABYPAIR_FAILURE:
      return {
        ...state,
        tokenData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
