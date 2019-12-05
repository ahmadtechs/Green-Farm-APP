import { ACTIONS } from "../Constants/ACTIONS";

const {
    GET_NOTIFICATION_COMPLETION_REQUEST,
    GET_NOTIFICATION_COMPLETION_SUCCESS,
    GET_NOTIFICATION_COMPLETION_ERROR,
} = ACTIONS;
export const getNotificationStarted=()=>{
    return{
        type: GET_NOTIFICATION_COMPLETION_REQUEST
    }
}

export const getNotificationSuccess=(payload)=>{
    return{
        type: GET_NOTIFICATION_COMPLETION_SUCCESS,
        payload
    }
}

export const getNotificationError=(payload)=>{
    return{
        type: GET_NOTIFICATION_COMPLETION_ERROR,
        payload
    }
}
