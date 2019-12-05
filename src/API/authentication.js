
import {API} from '../Constants/costants'

import { fetchAndHandleTokenRefresh } from './common';

export const login = (phone, password) => {
  const path = `${API.URL + API.PATHS.AUTHENTICATION}`;
  const method = "POST";
  const data = { phone: phone, password: password };
  const requestBody = JSON.stringify({data });

  // return Axios.post(url,{
  //   body
  // }).then(reStatus)
  return fetchAndHandleTokenRefresh(path, method, requestBody);
};
/**
 * - Name in file: `Initiate Sign Up`
 * - Send signup link to user's email and OTP to user's phone
 * @name fetchInitiateSignUp
 * @param {String} formInputs; contains the name, email and phone number of the user
 * @return {Promise} Resulting promise from fetch
 */
export const InitialSignUp =(dataInput)=>{
  const path = API.PATHS.SIGNUP;
  const method = 'POST';
  const data = {
    'phone':dataInput['phone'], 
    'firstname':dataInput['firstname'],
    'lastname':dataInput['lastname'],
    'password':dataInput['password'],
   
  }
  const requestBody = JSON.stringify({data });

  return fetchAndHandleTokenRefresh(path, method, requestBody);

}
