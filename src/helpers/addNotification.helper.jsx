import axios from 'axios'
import { addNotificationStarted, addNotificationSuccess, addNotificationError } from "../actions/AddNotification.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API

  
  export const addNotification = ( userData ) => {
    return (dispatch,) => {
        dispatch(addNotificationStarted());
        axios.post( 'https://bhfarmers.herokuapp.com/notifications', userData, )
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(addNotificationSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(addNotificationError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(addNotificationError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(addNotificationError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(addNotificationError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                // return dispatch(addNotificationError(ERROR_MESSAGE.NETWORK_FAILURE));
                   } );
    };
  };
  