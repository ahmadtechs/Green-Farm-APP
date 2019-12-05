import { ACTIONS } from "../Constants/ACTIONS";

const {
    GET_ACTIVITIES_COMPLETION_REQUEST,
    GET_ACTIVITIES_COMPLETION_SUCCESS,
    GET_REFRESH_ACTIVITIES_COMPLETION,
    GET_ACTIVITIES_COMPLETION_ERROR,
} = ACTIONS;
export const getActivitiesRequest=()=>{
    return{
        type: GET_ACTIVITIES_COMPLETION_REQUEST
    }
}

export const getActivitiesSuccess=(payload)=>{
    return{
        type: GET_ACTIVITIES_COMPLETION_SUCCESS,
        payload
    }
}

export const getCompleteActivitiesError=(payload)=>{
    return{
        type: GET_ACTIVITIES_COMPLETION_ERROR,
        payload
    }
}
export const getfetchRefreshRequest= ()=>{
    return{
        type:GET_REFRESH_ACTIVITIES_COMPLETION
    }
}
