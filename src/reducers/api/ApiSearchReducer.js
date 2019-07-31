import {API_SEARCH_START, API_SEARCH_ERROR, API_SEARCH_COMPLETE} from "../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_SEARCH_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_SEARCH_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_SEARCH_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}

export default ApiSearchReducer;