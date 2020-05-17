import {API_REVIEW_START, API_REVIEW_ERROR, API_REVIEW_COMPLETE} from "../../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: {}};

const ApiReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_REVIEW_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_REVIEW_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_REVIEW_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
};

export default ApiReviewReducer;