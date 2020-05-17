import {combineReducers, createStore, applyMiddleware, compose} from 'redux';

import ApiUpcomingAlbumsReducer from './api/ApiUpcomingAlbumsReducer'
import ApiSearchReducer from './api/ApiSearchReducer'
import ApiLatestBandsUpdateReducer from './api/ApiLatestBandsUpdateReducer'
import ApiAlbumReducer from './api/album/ApiAlbumReducer'
import ApiAlbumSongsReducer from './api/album/ApiAlbumSongsReducer'
import ApiBandReducer from './api/album/ApiBandReducer'
import ApiBandAlbumsReducer from './api/album/ApiBandAlbumsReducer'
import ApiBandReviewsReducer from './api/album/ApiBandReviewsReducer'
import ApiAlbumReviewsReducer from './api/album/ApiAlbumReviewsReducer'
import ApiReviewReducer from './api/album/ApiReviewReducer'

import thunk from 'redux-thunk';
import ApiSongReducer from "./api/album/ApiSongReducer";

const AppReducers = combineReducers({
    ApiLatestBandsUpdateReducer,
    ApiSearchReducer,
    ApiUpcomingAlbumsReducer,
    ApiAlbumReducer,
    ApiAlbumSongsReducer,
    ApiBandReducer,
    ApiSongReducer,
    ApiBandAlbumsReducer,
    ApiBandReviewsReducer,
    ApiAlbumReviewsReducer,
    ApiReviewReducer,
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
};

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;