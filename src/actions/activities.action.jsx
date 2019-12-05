import { ACTIONS } from "../Constants/ACTIONS";

const {
    ACTIVITIES_COMPLETION_REQUEST,
    ACTIVITIES_COMPLETION_SUCCESS,
    REFRESH_ACTIVITIES_COMPLETION,
    ACTIVITIES_COMPLETION_ERROR,
} = ACTIONS;
export const fetchActivitiesRequest=()=>{
    return{
        type: ACTIVITIES_COMPLETION_REQUEST
    }
}

export const fetchActivitiesSuccess=(payload)=>{
    return{
        type: ACTIVITIES_COMPLETION_SUCCESS,
        payload
    }
}

export const fetchCompleteActivitiesError=(payload)=>{
    return{
        type: ACTIVITIES_COMPLETION_ERROR,
        payload
    }
}
export const fetchRefreshRequest= ()=>{
    return{
        type:REFRESH_ACTIVITIES_COMPLETION
    }
}
