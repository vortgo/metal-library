import {API_SEARCH_START, API_SEARCH_ERROR, API_SEARCH_COMPLETE} from "../actions/ActionTypes";
import {API_UPCOMING_ALBUMS_START, API_UPCOMING_ALBUMS_ERROR, API_UPCOMING_ALBUMS_COMPLETE} from "../actions/ActionTypes";
import {API_LATEST_BANDS_UPDATE_START, API_LATEST_BANDS_UPDATE_ERROR, API_LATEST_BANDS_UPDATE_COMPLETE} from "../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiRequestReducer = (state = initialState, action) => {
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
        case API_UPCOMING_ALBUMS_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_UPCOMING_ALBUMS_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_UPCOMING_ALBUMS_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
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
}

export default ApiRequestReducer;