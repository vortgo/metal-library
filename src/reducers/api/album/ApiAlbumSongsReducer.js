import {API_ALBUM_SONGS_START, API_ALBUM_SONGS_ERROR, API_ALBUM_SONGS_COMPLETE} from "../../../actions/ActionTypes";

const initialState = {isLoading: false, error: undefined, data: []};

const ApiAlbumSongsReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_ALBUM_SONGS_START:
            return {
                ...state,
                isLoading: true,
            };
        case API_ALBUM_SONGS_ERROR:
            console.log("network error", action.error);
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case API_ALBUM_SONGS_COMPLETE:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };
        default:
            return state;
    }
}

export default ApiAlbumSongsReducer;