import axios from 'axios'
import jwtToken from 'json-web-token'
import { history } from '../../../App';


import setAuthorizationToken from './setAuthorizationToken'
import {
    fetchLogin,
    fetchLoginrequest,
    logout,
    fetchLoginInvalid,
    fetchRefreshRequest,
  } from '../../../actions/authentication.action'
export const userLogin = ( userData ) => {
    return (dispatch, getState) => {
        dispatch( fetchLoginrequest() );
        axios.post( 'https://bhfarmers.herokuapp.com/auth', userData, )
            .then( res => {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                sessionStorage.setItem('user-token', data['access-token'])
                setAuthorizationToken(token)
                const { isLoggedIn } = getState().isAuthenticated;
            if (isLoggedIn) {
              return history.push('/')
            }
                console.log( res.data,'data' );

                dispatch( fetchLogin(jwtToken.decode(token)) );
                
            } )
            .catch( error => {
                dispatch( fetchLoginInvalid( error ) );
            } );
    };
};