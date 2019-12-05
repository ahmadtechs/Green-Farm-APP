import { ACTIONS } from "../Constants/ACTIONS";

const {
    GET_CROP_COMPLETION_REQUEST,
    GET_CROP_COMPLETION_SUCCESS,
    GET_CROP_COMPLETION_ERROR,
} = ACTIONS;
export const getCropRequest=()=>{
    return{
        type: GET_CROP_COMPLETION_REQUEST
    }
}

export const getCropSuccess=(payload)=>{
    return{
        type: GET_CROP_COMPLETION_SUCCESS,
        payload
    }
}

export const getCropError=()=>{
    return{
        type: GET_CROP_COMPLETION_ERROR,
        
    }
}

