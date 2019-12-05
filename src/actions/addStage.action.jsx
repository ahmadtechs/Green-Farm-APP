import { ACTIONS } from "../Constants/ACTIONS";

const {
    ADD_STAGE_COMPLETION_REQUEST,
    ADD_STAGE_COMPLETION_SUCCESS,
    ADD_STAGE_COMPLETION_ERROR,
} = ACTIONS;
export const addStageStarted = () => {
    return {
        type: ADD_STAGE_COMPLETION_REQUEST
    }
}

export const addStageSuccess = (payload) => {
    return {
        type: ADD_STAGE_COMPLETION_SUCCESS,
        payload
    }
}

export const addStageError = (payload) => {
    return {
        type: ADD_STAGE_COMPLETION_ERROR,
        payload
    }
}
