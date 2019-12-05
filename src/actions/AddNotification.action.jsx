import { ACTIONS } from "../Constants/ACTIONS";

const {
    ADD_NOTIFICATION_COMPLETION_REQUEST,
    ADD_NOTIFICATION_COMPLETION_SUCCESS,
    ADD_NOTIFICATION_COMPLETION_ERROR,
} = ACTIONS;
export const addNotificationStarted=()=>{
    return{
        type: ADD_NOTIFICATION_COMPLETION_REQUEST
    }
}

export const addNotificationSuccess=(payload)=>{
    return{
        type: ADD_NOTIFICATION_COMPLETION_SUCCESS,
        payload
    }
}

export const addNotificationError=(payload)=>{
    return{
        type: ADD_NOTIFICATION_COMPLETION_ERROR,
        payload
    }
}
