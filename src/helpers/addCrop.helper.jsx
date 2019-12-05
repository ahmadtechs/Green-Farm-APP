import axios from 'axios'
import { addCropStarted, addCropSuccess, addCropError } from "../actions/addCrop.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API

  
  export const addCrop = ( userData ) => {
    return (dispatch,) => {
        dispatch(addCropStarted());
        axios.post( 'https://bhfarmers.herokuapp.com/crops', userData, )
            .then( data => {
                 console.log( data.data,'data from api crops' );
                return dispatch(addCropSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(addCropError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(addCropError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(addCropError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(addCropError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                // return dispatch(addCropError(ERROR_MESSAGE.NETWORK_FAILURE));
                   } );
    };
  };
  