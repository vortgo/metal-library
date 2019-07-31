import {API_BAND_ALBUMS_START, API_BAND_ALBUMS_ERROR, API_BAND_ALBUMS_COMPLETE} from "../../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiBandAlbumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_BAND_ALBUMS_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_BAND_ALBUMS_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_BAND_ALBUMS_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}

export default ApiBandAlbumsReducer;