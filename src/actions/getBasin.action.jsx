import { ACTIONS } from "../Constants/ACTIONS";

const {
    GET_BASIN_COMPLETION_REQUEST,
    GET_BASIN_COMPLETION_SUCCESS,
    GET_REFRESH_BASIN_COMPLETION,
    GET_BASIN_COMPLETION_ERROR,
} = ACTIONS;
export const getBasinRequest=()=>{
    return{
        type: GET_BASIN_COMPLETION_REQUEST
    }
}

export const getBasinSuccess=(payload)=>{
    return{
        type: GET_BASIN_COMPLETION_SUCCESS,
        payload
    }
}

export const getBasinError=(payload)=>{
    return{
        type: GET_BASIN_COMPLETION_ERROR,
        payload

        
    }
}
export const getBasinRefreshRequest= ()=>{
    return{
        type:GET_REFRESH_BASIN_COMPLETION
    }
}
