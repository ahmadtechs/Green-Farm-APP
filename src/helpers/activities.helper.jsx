import axios from 'axios'
import { fetchActivitiesRequest, fetchActivitiesSuccess, fetchCompleteActivitiesError } from "../actions/activities.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API

  
  export const createAcitivity = ( userData ) => {
    return (dispatch, getState) => {
        dispatch(fetchActivitiesRequest());
        axios.post( 'https://bhfarmers.herokuapp.com/activities', userData, )
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(fetchActivitiesSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.NETWORK_FAILURE)));
                   } );
    };
  };
  export const getAcitivity = ( userData ) => {
    return (dispatch, getState) => {
        dispatch(fetchActivitiesRequest());
        axios.get( 'https://bhfarmers.herokuapp.com/activities')
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(fetchActivitiesSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                return dispatch( dispatch(fetchCompleteActivitiesError(ERROR_MESSAGE.NETWORK_FAILURE)));
                   } );
    };
  };
  