import { API } from '../Constants/costants';

export const getCountryCode = ()=>{
    const {PATHS,URL} =API;
    const status = response =>{
        if(response.status===200){
             return response;
        }else{
            Promise.reject(response)
        }
    }
    
const json = response => response.json();
 return  fetch(URL+PATHS.DIAL_CODE,{
     method:'GET',
        headers:{
        'Content-Type': 'application/json',
        },
    })
    .then(status)
    .then(json)
    .catch(err=>{
        return err;
    })

}