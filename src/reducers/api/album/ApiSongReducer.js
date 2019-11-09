import {API_SONG_START, API_SONG_ERROR, API_SONG_COMPLETE} from "../../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_SONG_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_SONG_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_SONG_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}

export default ApiSongReducer;