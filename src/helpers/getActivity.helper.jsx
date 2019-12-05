import axios from 'axios'
import { getActivitiesRequest, getActivitiesSuccess, getCompleteActivitiesError } from "../actions/getActivity.action";
import { timeout } from "./authentication.helper";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'

const {status}= API



export const getActivity = ( ) => {
    return (dispatch, getState) => {
        dispatch(getActivitiesRequest());
        axios.get( 'https://bhfarmers.herokuapp.com/activities' )
            .then( data => {
                 console.log( data.data,'data' );
                return dispatch(getActivitiesSuccess(data))
            } )
            .catch( error => {
                console.log(error)
                if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(getCompleteActivitiesError(ERROR_MESSAGE.TIMEOUT)));
                if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(getCompleteActivitiesError(ERROR_MESSAGE.UNAUTHORIZED)));
                if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(getCompleteActivitiesError(ERROR_MESSAGE.SERVER_ERROR)));
                if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(getCompleteActivitiesError(ERROR_MESSAGE.EXPIRED_TOKEN)));
                return dispatch( dispatch(getCompleteActivitiesError(ERROR_MESSAGE.NETWORK_FAILURE)));
                   } );
    };
  };