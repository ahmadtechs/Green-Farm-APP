import axios from 'axios'
import { timeout } from "./authentication.helper";



import { fetchCompleteSignUp,
     fetchCompleteSignUpRequest,
     fetchCompleteSignUpError,
     fetchRefreshRequest,
     } from "../actions/completeSignUp.action";
 import { user } from "../API/user";
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { dispatchAndRefresh } from './initSignUp.helper';
import { history } from "../App";


const {
    SERVER_ERROR,
    NETWORK_FAILURE,
    SIGN_UP_ERROR,
    TIMEOUT
} = ERROR_MESSAGE;



const {status}= API
export const completeUserSignUp = (associateID)=>{
    return (dispatch, getState)=>{
      dispatch(fetchCompleteSignUpRequest());
     return timeout(50000, user(associateID)).then(userData=>{
         console.log(userData)
      return dispatch(fetchCompleteSignUp(userData))
     }).catch(error=>{
         console.log(error)
        //  if (error === ERROR_MESSAGE.TIMEOUT) return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.TIMEOUT)));
        //  if (error.status === status.UNAUTHORIZED)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.UNAUTHORIZED)));
        //  if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.SERVER_ERROR)));
        //  if (error.status === status.TOKEN_EXPIRED)  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.EXPIRED_TOKEN)));
        //  return dispatch( dispatch(fetchUserDataError(ERROR_MESSAGE.NETWORK_FAILURE)));
     })
     }
  }
  



// export const completeUserSignUp = ( userData ) => {
//     return (dispatch, ) => {
//         dispatch(fetchCompleteSignUpRequest())
//         axios.post( 'https://bhfarmers.herokuapp.com/users', userData, )
//             .then( data => {
//               dispatch(fetchCompleteSignUp(data))
//               return history.push('/auth');
                
  
                
//             } )
//             .catch( err => {
//                 console.log(err)
//                 if(err === TIMEOUT) return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(TIMEOUT),fetchRefreshRequest()))
//                 if(err.status ===status.NOT_FOUND) return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(SIGN_UP_ERROR.REQUEST_FAILED)))
//                  if(err.status === status.NOT_ACCEPTABLE) return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(SIGN_UP_ERROR.INCOMPLETE),fetchRefreshRequest())) 
//                 if(err.status === status.INTERNAL_SERVER_ERROR)  return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(SERVER_ERROR),fetchRefreshRequest()))
//                   return dispatch(dispatchAndRefresh(fetchCompleteSignUpError(NETWORK_FAILURE),fetchRefreshRequest()))
//        } );
//      };
//    };

