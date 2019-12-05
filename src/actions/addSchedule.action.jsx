import { ACTIONS } from "../Constants/ACTIONS";

const {
    ADD_SCHEDULE_COMPLETION_REQUEST,
    ADD_SCHEDULE_COMPLETION_SUCCESS,
    ADD_SCHEDULE_COMPLETION_ERROR,
    ADD_SCHEDULE_COMPLETION_REFRESH
} = ACTIONS;
export const addScheduleStarted=()=>{
    return{
        type: ADD_SCHEDULE_COMPLETION_REQUEST
    }
}

export const addScheduleSuccess=(payload)=>{
    return{
        type: ADD_SCHEDULE_COMPLETION_SUCCESS,
        payload
    }
}

export const addScheduleError=(payload)=>{
    return{
        type: ADD_SCHEDULE_COMPLETION_ERROR,
        payload
    }
}
export const addScheduleRefresh= ()=>{
    return{
        type:ADD_SCHEDULE_COMPLETION_REFRESH
    }
}
