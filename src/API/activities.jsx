import {API} from '../Constants/costants'

import { fetchAndHandleTokenRefresh, getAccessTokenHeader, getNoTokenErrorObject } from './common';


export const activity=(associateid)=>{
  let path = `${API.URL + API.PATHS.ACTIVITIES_COMPLETION_SUCCESS}`;
  const method = "POST";
  
  const data = {
       'name' : associateid['name'],
  }
  const requestBody = JSON.stringify({ data});
  return fetchAndHandleTokenRefresh(path,method,requestBody);
}
