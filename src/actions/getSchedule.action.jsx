import { ACTIONS } from "../Constants/ACTIONS";

const {
    GET_SCHEDULE_COMPLETION_REQUEST,
    GET_SCHEDULE_COMPLETION_SUCCESS,
    GET_SCHEDULE_COMPLETION_ERROR,
    GET_SCHEDULE_COMPLETION_REFRESH 
} = ACTIONS;
export const getScheduleRequest=()=>{
    return{
        type: GET_SCHEDULE_COMPLETION_REQUEST
    }
}

export const getScheduleSuccess=(payload)=>{
    return{
        type: GET_SCHEDULE_COMPLETION_SUCCESS,
        payload
    }
}

export const getCompleteScheduleError=(payload)=>{
    return{
        type: GET_SCHEDULE_COMPLETION_ERROR,
        payload
    }
}
export const getScheduleRefresh= ()=>{
    return{
        type:GET_SCHEDULE_COMPLETION_REFRESH
    }
}
