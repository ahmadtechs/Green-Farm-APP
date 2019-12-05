import { ACTIONS } from "../Constants/ACTIONS";

const {
    ADD_BASIN_COMPLETION_REQUEST,
    ADD_BASIN_COMPLETION_SUCCESS,
    REFRESH_ADD_BASIN_COMPLETION,
    ADD_BASIN_COMPLETION_ERROR,
} = ACTIONS;
export const addBasinStarted=()=>{
    return{
        type: ADD_BASIN_COMPLETION_REQUEST
    }
}

export const addBasinSuccess=(payload)=>{
    return{
        type: ADD_BASIN_COMPLETION_SUCCESS,
        payload
    }
}

export const addBasinError=(payload)=>{
    return{
        type: ADD_BASIN_COMPLETION_ERROR,
        payload
    }
}
export const addBasinRefresh= ()=>{
    return{
        type:REFRESH_ADD_BASIN_COMPLETION
    }
}
