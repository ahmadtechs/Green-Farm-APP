import { fetchAndHandleTokenRefresh, getAccessTokenHeader, getNoTokenErrorObject } from './common';
import { API } from '../Constants/costants';


export const user=(associateId)=>{
  const accessTokenHeader = getAccessTokenHeader();
if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  let path = 'https://bhfarmers.herokuapp.com/users';
  const method = "POST";
  
  const data ={
    'phone': associateId['phone'],
    'firstname': associateId['firstname'],
    'lastname': associateId['lastname'],
    'password': associateId['password'],
    'usertypeid': associateId['usertypeid'],
    
  }
  const headers =accessTokenHeader;
  const requestBody = JSON.stringify({ data});
  return fetchAndHandleTokenRefresh(path,method,requestBody,headers);
}

  

