import {API_LATEST_BANDS_UPDATE_START, API_LATEST_BANDS_UPDATE_ERROR, API_LATEST_BANDS_UPDATE_COMPLETE} from "../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiLatestBandsUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_LATEST_BANDS_UPDATE_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_LATEST_BANDS_UPDATE_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_LATEST_BANDS_UPDATE_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
};

export default ApiLatestBandsUpdateReducer;