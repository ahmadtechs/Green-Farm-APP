import axios from 'axios'
import { addStageStarted, addStageSuccess, addStageError } from "../actions/addStage.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API

  
  export const addStage = ( userData ) => {
    return (dispatch,) => {
        dispatch(addStageStarted());
        axios.post( 'https://bhfarmers.herokuapp.com/stages', userData, )
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(addStageSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(addStageError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(addStageError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(addStageError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(addStageError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                return dispatch(addStageError(ERROR_MESSAGE.NETWORK_FAILURE));
                   } );
    };
  };
  