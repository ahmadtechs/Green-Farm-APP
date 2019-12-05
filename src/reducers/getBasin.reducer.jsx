import {
    ACTIONS
} from '../Constants/ACTIONS'
const InitState = {
    data: {},
    isLoading: false,
    errorMessage: '',
    error: false,
    formError: {},
    CompletionSuccess: false,
}

const {
    GET_BASIN_COMPLETION_SUCCESS,
    BASIN_COMPLETION_REQUEST,
    GET_BASIN_COMPLETION_SUCCESS_ERROR,
    REFRESH_GET_BASIN_COMPLETION_SUCCESS,
} = ACTIONS


const getBasinReducer = (state = InitState, action) => {
    switch (action.type) {
        case BASIN_COMPLETION_REQUEST:
            return {
                isLoading: true,
                errorMessage: '',
                error: false,
                CompletionSuccess: false,
                formError: {},
            }
        case GET_BASIN_COMPLETION_SUCCESS:
            return {
                isLoading: false,
                CompletionSuccess: true,
                error: false,
                data: { ...state.data, ...action.payload },
            }
        case GET_BASIN_COMPLETION_SUCCESS_ERROR:
            return {
                isLoading: false,
                CompletionSuccess: false,
                error: true,
                errorMessage: action.payload.message,
                formError: action.payload.formErrors,
            }
        case REFRESH_GET_BASIN_COMPLETION_SUCCESS:
            return {
                isLoading: false,
                error: false,
                formError: {},
                CompletionSuccess: false,
                errorMessage: '',
            }
        default:
            return state;
    }
}

export default getBasinReducer;