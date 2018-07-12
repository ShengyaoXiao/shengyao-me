import { actionTypes, status } from "../actions/_constants"

const FETCH_SUCCESS = actionTypes.FETCH + status.SUCCESS;
const FETCH_FAILURE = actionTypes.FETCH + status.FAILURE;
const FETCH_START = actionTypes.FETCH + status.START;
// Reducers specify how the application changes in response to actions sent to the store.
// how state changes  
export default ({ actionTypePrefix, objectsInitialState, isFetchingInitialState }) => ({

    objectsReducer: (state = objectsInitialState, action) => {
        switch(action.type) {
            case actionTypePrefix + FETCH_SUCCESS:
                return state.concat(action.payload);
            default:
                return state;
        }
    },

    isFetchingReducer: (state = isFetchingInitialState, action) => {
        switch(action.type) {
            case actionTypePrefix + FETCH_SUCCESS || actionTypePrefix + FETCH_FAILURE:
                return false;
            case actionTypePrefix + FETCH_START:
                return true;
            default:
                return state;
        }
    }
})