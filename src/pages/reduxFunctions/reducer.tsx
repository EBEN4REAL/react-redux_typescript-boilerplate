import update from "immutability-helper";
import {Action, Reducer} from 'redux'
import CUSTOMER_REDUCER from "./constant";

 interface ReducerState {
  success: any;
  error: any;
  isRequesting: boolean;
  result: object
}

const initialState:ReducerState = {
  success: null,
  error: null,
  isRequesting: false,
  result: {}
};

const requesting = (state:ReducerState, loading: string) =>
  update(state, {
    [loading]: {
      $set: true,
    },
  });

const handleCustomersList = (state:ReducerState, action: any) => {
  return update(state, {
    result: {
      $set: action.payload,
    },
   
    isRequesting: {
      $set: false,
    },
  });
}
  


const setErrorAction = (state:ReducerState, action:any) =>
  update(state, {
    error: {
      $set: action.payload,
    },
  });

const handleError = (state:ReducerState, action:any) => {
  return update(state, {
    isRequesting: {
      $set: false,
    },
   
    error: {
      $set: action.error,
    },
  });
};

const clearError = (state:ReducerState) => {
  return update(state, {
    error: {
      $set: null,
    },
  });
};

const clearSuccessMessage = (state:ReducerState) =>
  update(state, {
    success: {
      $set: null,
    },
  });

const customerReducer:Reducer<ReducerState> = (state:ReducerState = initialState, action:Action):ReducerState => {
  switch (action.type) {
    case CUSTOMER_REDUCER.fetchAllCustomersRequested:
      return requesting(state, "isRequesting");
    case CUSTOMER_REDUCER.fetchAllCustomersError:
      return handleError(state, action);
    case CUSTOMER_REDUCER.fetchAllCustomersSuccess:
      return handleCustomersList(state, action);

   
    case CUSTOMER_REDUCER.setErrorSuccess:
      return setErrorAction(state, action);

    case CUSTOMER_REDUCER.clearErrorMessageSuccess:
      return clearError(state);
    case CUSTOMER_REDUCER.clearSuccessMessageSuccess:
      return clearSuccessMessage(state);

    default:
      return state;
  }
};
export default customerReducer;
