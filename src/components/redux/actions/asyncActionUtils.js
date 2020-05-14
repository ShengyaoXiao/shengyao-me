import { status } from "./_constants";

// Remember that actions only describe what happened,
// but don’t describe how the application’s state changes.

// Each of these two moments usually require a change in the application state;
// Usually for any API request you want to dispatch at least three different kinds of actions.

// An action informing the reducers that the request began.
// An action informing the reducers that the request finished successfully.
// An action informing the reducers that the request failed.

const getAsyncAction = ({ actionTypePrefix, asyncFunc }) => {
  const actionTypeStart = actionTypePrefix + status.START;
  const actionTypeSuccess = actionTypePrefix + status.SUCCESS;
  const actionTypeFailure = actionTypePrefix + status.FAILURE;

  const startAction = () => {
    return {
      type: actionTypeStart,
    };
  };

  const successAction = (payload) => {
    return {
      type: actionTypeSuccess,
      payload: payload,
    };
  };

  const failureAction = (error) => {
    return {
      type: actionTypeFailure,
      payload: error,
    };
  };

  // Dispatch actions
  const asyncAction = (args) => {
    return (dispatch) => {
      dispatch(startAction());
      asyncFunc(args)
        .then((data) => dispatch(successAction(data)))
        .catch((error) => dispatch(failureAction(error)));
    };
  };

  return asyncAction;
};

export default getAsyncAction;
