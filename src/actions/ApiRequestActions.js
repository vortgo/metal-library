import * as Actions from './ActionTypes';
import { connect } from 'react-redux';
import axios from 'axios';
import {API_REQUEST_START} from "./ActionTypes";
import {API_REQUEST_ERROR} from "./ActionTypes";
import {API_REQUEST_COMPLETE} from "./ActionTypes";


 const apiRequestStart = () => ({
    type: API_REQUEST_START
})

 const apiRequestError = (error) => ({
    type: API_REQUEST_ERROR,
    error: error
})

 const apiRequestComplete = (data) => ({
    type: API_REQUEST_COMPLETE,
    data: data
})

export const callApiRequest = () => {
    return dispatch => {
        dispatch(apiRequestStart())
        axios.get('http://www.mocky.io/v2/5d35ff9756000067003a514c?mocky-delay=1000ms')
            .then(response => {
                dispatch(apiRequestComplete(response.data))
            })
            .catch(error => {
                dispatch(apiRequestError(error))
            });
    }
}