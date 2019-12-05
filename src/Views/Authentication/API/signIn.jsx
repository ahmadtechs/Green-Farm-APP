import axios from 'axios'
import jwtToken from 'json-web-token'



import setAuthorizationToken from './setAuthorizationToken'
import  {
    signInStarted,
    signInSucceeded,
    signInFailed
} from '../store/actions/signIn'
export const signInUser = ( userData ) => {
    return (dispatch, getState) => {
        dispatch( signInStarted() );
        axios.post( 'http://localhost:2000/sabitrade/user/login/actions', userData, )
            .then( res => {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token)
               
                console.log( res.data,'data' );

                dispatch( signInSucceeded(jwtToken.decode(token)) );
                
            } )
            .catch( error => {
                dispatch( signInFailed( error ) );
            } );
    };
};