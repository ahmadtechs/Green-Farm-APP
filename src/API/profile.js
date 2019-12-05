import { fetchAndHandleTokenRefresh, getAccessTokenHeader, getNoTokenErrorObject } from './common';
import { API } from '../Constants/costants';


export const activity=(associateid)=>{
  const accessTokenHeader = getAccessTokenHeader();
if (!accessTokenHeader) { return Promise.reject(getNoTokenErrorObject()); }
  let path = API.PATHS.ACTIVITIES_COMPLETION_SUCCESS;
  const method = "POST";
  
  const data = {
       'name' : associateid['name'],
  }
  const headers =accessTokenHeader;
  const requestBody = JSON.stringify({ meta, data});
  return fetchAndHandleTokenRefresh(path,method,requestBody,headers);
}

  