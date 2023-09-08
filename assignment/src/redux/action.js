
import axios from 'axios';
import { GET_DATABYPAIR_FAILURE, GET_DATABYPAIR_REQUEST, GET_DATABYPAIR_SUCCESS, GET_DATABYTOKEN_FAILURE, GET_DATABYTOKEN_REQUEST, GET_DATABYTOKEN_SUCCESS,  } from './actiontype';

export const fetchTokenData = (token) => (dispatch) => {
    dispatch({ type: GET_DATABYTOKEN_REQUEST})
    return axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${token}`)
        .then(res => dispatch({ type: GET_DATABYTOKEN_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_DATABYTOKEN_FAILURE, payload: err }))
}


export const fetchPairData = (pair) => (dispatch) => {
    dispatch({ type: GET_DATABYPAIR_REQUEST })
    return axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${pair}`)
        .then(res => dispatch({ type: GET_DATABYPAIR_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_DATABYPAIR_FAILURE, payload: err }))
}