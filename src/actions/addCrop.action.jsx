import { ACTIONS } from "../Constants/ACTIONS";

const {
    ADD_CROP_COMPLETION_REQUEST,
    ADD_CROP_COMPLETION_SUCCESS,
    REFRESH_ADD_CROP_COMPLETION,
    ADD_CROP_COMPLETION_ERROR,
} = ACTIONS;
export const addCropStarted = () => {
    return {
        type: ADD_CROP_COMPLETION_REQUEST
    }
}

export const addCropSuccess = (payload) => {
    return {
        type: ADD_CROP_COMPLETION_SUCCESS,
        payload
    }
}

export const addCropError = (payload) => {
    return {
        type: ADD_CROP_COMPLETION_ERROR,
        payload
    }
}
export const addCropRefresh = () => {
    return {
        type: REFRESH_ADD_CROP_COMPLETION
    }
}
