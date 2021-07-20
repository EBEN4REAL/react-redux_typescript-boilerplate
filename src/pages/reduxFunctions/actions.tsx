import CUSTOMER_REDUCER from "./constant";
import { makeGetRequest } from "./api";
import { Dispatch } from "redux";

const homeActionsRequested = (actionType: string) => ({
  type: CUSTOMER_REDUCER[`${actionType}Requested`],
});

const homeActionsSuccess = (actionType: string, payload: any) => ({
  type: CUSTOMER_REDUCER[`${actionType}Success`],
  payload,
});

const homeActionsError = (actionType: string, error: any) => ({
  type: CUSTOMER_REDUCER[`${actionType}Error`],
  error,
});

// clear error message
export const clearErrorMessage = () => (dispatch: Dispatch) => {
  const actionType = "clearErrorMessage";
  dispatch(homeActionsSuccess(actionType, {}));
};

// clear success message
export const clearSuccessMessage = () => (dispatch: Dispatch) => {
  const actionType = "clearSuccessMessage";
  dispatch(homeActionsSuccess(actionType, {}));
};

// set error
export const handleSetError = (payload: any) => (dispatch: Dispatch) => {
  const actionType = "setError";
  dispatch(homeActionsSuccess(actionType, payload));
};

export const handleCustomersList = (params: number) => {
  const actionType = "fetchAllCustomers";

  return async (dispatch: Dispatch) => {
    try {
      dispatch(homeActionsRequested(actionType));
      const res = await makeGetRequest(`/posts/${params}`);

      if (res.status !== 200) {
        dispatch(homeActionsError(actionType, res.data.msg));
      } else {
        dispatch(homeActionsSuccess(actionType, res.data));
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
        } else {
          return dispatch(
            homeActionsError(actionType, error.response.data.msg)
          );
        }
      } else if (error.request) {
        // console.log(error.request)
        return dispatch(homeActionsError(actionType, "Network error"));
      } else {
        // Something happened in setting up the request and triggered an error
        console.log("axios", error.message);
      }
    }
  };
};
