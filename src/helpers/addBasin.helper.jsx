import axios from 'axios'
import { addBasinStarted, addBasinSuccess, addBasinError } from "../actions/addBasin.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API

  
  export const addBasin = ( userData ) => {
    return (dispatch,) => {
        dispatch(addBasinStarted());
        axios.post( 'https://bhfarmers.herokuapp.com/basins', userData, )
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(addBasinSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(addBasinError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(addBasinError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(addBasinError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(addBasinError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                // return dispatch(addBasinError(ERROR_MESSAGE.NETWORK_FAILURE));
                   } );
    };
  };
  