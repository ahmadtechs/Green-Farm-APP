import { ACTIONS } from "../Constants/ACTIONS";

const {
    GET_STAGE_COMPLETION_REQUEST,
    GET_STAGE_COMPLETION_SUCCESS,
    GET_STAGE_COMPLETION_ERROR,
} = ACTIONS;
export const getStageRequest=()=>{
    return{
        type: GET_STAGE_COMPLETION_REQUEST
    }
}

export const getStageSuccess=(payload)=>{
    return{
        type: GET_STAGE_COMPLETION_SUCCESS,
        payload
    }
}

export const getStageError=()=>{
    return{
        type: GET_STAGE_COMPLETION_ERROR,
        
    }
}

