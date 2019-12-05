import axios from 'axios'
import { addScheduleStarted, addScheduleSuccess, addScheduleError, addScheduleRefresh } from "../actions/addSchedule.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API

  
  export const addStage = ( userData ) => {
    return (dispatch, getState) => {
        dispatch(addScheduleStarted());
        axios.post( 'https://bhfarmers.herokuapp.com/tasks', userData, )
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(addScheduleSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(addScheduleError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(addScheduleError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(addScheduleError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(addScheduleError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                return dispatch( dispatch(addScheduleError(ERROR_MESSAGE.NETWORK_FAILURE)));
                   } );
    };
  };

  