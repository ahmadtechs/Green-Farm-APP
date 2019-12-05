import axios from 'axios'

import {
  fetchLogin,
  fetchLoginrequest,
  logout,
  fetchLoginInvalid,
  fetchRefreshRequest,
} from '../actions/authentication.action'
import { login } from '../API/authentication';
import { history } from '../App';
import { API } from '../Constants/costants';
import { ERROR_MESSAGE } from '../Constants/error.constants'
import { dispatchAndRefresh } from './initSignUp.helper';
const { status } = API




const { SIGN_IN_INVALID, NETWORK_FAILURE } = ERROR_MESSAGE
/**
 * - Remove tokens from session
 */
export const clearSession = () => {
  try {
    
    sessionStorage.removeItem('token')
  } catch (error) {
    console.log(error);
  }
};

/**
 * - Check is there is an active session
 * - Relies on access-token for methods without access to the redux store
 * @return {Boolean}
 */
export const isSessionActive = () => {
  let token;
  try {
    token = sessionStorage.getItem('token');

  } catch (error) {
    return false;
  }
  return Boolean(token);
};


/** 
 * @param set timeout when network calls loading for too long say > 4sec
 * 
 * @returns {Promise}
*/
export const timeout = (ms, promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(ERROR_MESSAGE.TIMEOUT)
    }, ms)
    promise.then(resolve, reject)
  })
}




export const userLogin = ( userData ) => {
  return (dispatch, getState) => {
    
      dispatch( fetchLoginrequest() );
      axios.post( 'https://cors-anywhere.herokuapp.com/https://bhfarmers.herokuapp.com/auth', userData, )
          .then( data => {
              
            sessionStorage.setItem('token', data.data['token'])
            const token = sessionStorage.getItem('token')
          if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          }else{
            delete axios.defaults.headers.common['Authorization'];
          }
            dispatch(fetchLogin(data))
            console.log( data.data['token'],'data' );
            if (data.data['token'] === undefined){
              return null
            }else{
            // const { isLoggedIn } = getState().isAuthenticated;
            // if (isLoggedIn) {
              return history.push('/')
            }
              
            
              
          } )
          .catch( error => {
              console.log(error)
          if (error === ERROR_MESSAGE.TIMEOUT) return dispatch(dispatchAndRefresh(fetchLoginInvalid(ERROR_MESSAGE.TIMEOUT),fetchRefreshRequest()))
          if (error.status === status.INVALID_CREDENTIALS) return dispatch(dispatchAndRefresh(fetchLoginInvalid(SIGN_IN_INVALID),fetchRefreshRequest()))
          if (error.status === status.INTERNAL_SERVER_ERROR)  return dispatch(dispatchAndRefresh(fetchLoginInvalid(NETWORK_FAILURE),fetchRefreshRequest()))
           return dispatch(dispatchAndRefresh(fetchLoginInvalid(NETWORK_FAILURE),fetchRefreshRequest()))
          } );
  };
};

export const userLogout = () => {
  return (dispatch, getState) => {
    dispatch(logout())
    const { isLoggedIn } = getState().isAuthenticated;
    if (!isLoggedIn) {
      clearSession()
      return history.push('/auth')
    }
  }
}




