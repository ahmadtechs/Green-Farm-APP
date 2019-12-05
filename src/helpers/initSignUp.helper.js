
import {
    fetchOtpError,
    fetchOtpRequest,
    getOtpData,
    fetchSignUpError,
    fetchSignUpReguest,
    getSignUpData,
    fetchRefreshRequest,
} from '../actions/initSignUp.action'
import { InitialSignUp } from '../API/authentication';
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants';
import { timeout } from './authentication.helper';
import { history } from '../App';



export const dispatchAndRefresh = (errorAction, refreshAction)=>{
    return (dispatch)=>{
        dispatch(errorAction);
        return  setTimeout(() => {  return dispatch(refreshAction) }, 4000)
    }
   }
   

const { status } = API;
const { NETWORK_FAILURE,SERVER_ERROR, SIGN_UP_ERROR, TIMEOUT, OTP_ERROR } = ERROR_MESSAGE
export const initUserSignUp = (credentials) => {

    return (dispatch,) => {
        dispatch(fetchSignUpReguest())
        setTimeout(() => {
         
            // return dispatch(getSignUpData(credentials))
            if (credentials) {
                return timeout(4000, InitialSignUp(credentials))
                    .then((resData) => {
                        console.log(resData)
                        return dispatch(getSignUpData(credentials))
                    }).catch(err => {
                        console.log(err)
                        console.log(err.status)
                        if (err === ERROR_MESSAGE.TIMEOUT)  return dispatch(dispatchAndRefresh(fetchSignUpError(TIMEOUT),fetchRefreshRequest()))
                        if (err.status === status.NOT_ACCEPTABLE) return dispatch(dispatchAndRefresh(fetchSignUpError(SIGN_UP_ERROR.INCOMPLETE),fetchRefreshRequest()))
                        if (err.status === status.INTERNAL_SERVER_ERROR) return dispatch(dispatchAndRefresh(fetchSignUpError(SERVER_ERROR),fetchRefreshRequest()))
                         return dispatch(dispatchAndRefresh(fetchSignUpError(NETWORK_FAILURE),fetchRefreshRequest()));
                    })
            }

        }, 2000)
    }
}


