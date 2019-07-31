import {API_BAND_START, API_BAND_ERROR, API_BAND_COMPLETE} from "../../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiBandReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_BAND_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_BAND_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_BAND_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}

export default ApiBandReducer;