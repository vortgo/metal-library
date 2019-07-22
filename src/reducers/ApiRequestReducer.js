import {API_REQUEST_START, API_REQUEST_COMPLETE, API_REQUEST_ERROR} from "../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_REQUEST_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_REQUEST_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}

export default ApiRequestReducer;