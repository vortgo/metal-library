import axios from "axios";

const url = 'http://demo9434884.mockable.io/api/v1/';

export default class Api {

    static search (searchString){
        return axios.get(url + 'search' + searchString);
    }

    static upcomingAlbums (){
        return axios.get(url + 'collection/upcoming-albums');
    }

    static latestBandsUpdate(){
        return axios.get(url + 'collection/latest-bands-update');
    }

    static album(albumId){
        return axios.get(url + 'album/' + albumId);
    }

    static albumSongs(albumId){
        return axios.get(url + 'album/' + albumId + '/songs');
    }

    static band(bandId){
        return axios.get(url + 'band/' + bandId);
    }

    static bandAlbums(bandId){
        return axios.get(url + 'band/' + bandId + '/albums');
    }
}
