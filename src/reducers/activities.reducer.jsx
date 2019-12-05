import {
    ACTIONS
    } from '../Constants/ACTIONS'
const InitState = {
    data:{},
    isLoading:false,
    errorMessage:'',
    error:false,
    formError:{},
    CompletionSuccess:false,
  }
  
  const {
      ACTIVITIES_COMPLETION_SUCCESS,
      ACTIVITIES_COMPLETION_REQUEST,
      ACTIVITIES_COMPLETION_SUCCESS_ERROR,
      REFRESH_ACTIVITIES_COMPLETION_SUCCESS,
  } = ACTIONS

  
 const activityReducer = (state = InitState, action) =>{
      switch (action.type) {
          case ACTIVITIES_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case ACTIVITIES_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,...action.payload},
        }
        case ACTIVITIES_COMPLETION_SUCCESS_ERROR:
        return{
            isLoading:false,
            CompletionSuccess:false,
            error:true,
            errorMessage:action.payload.message,
            formError:action.payload.formErrors,
        }
        case REFRESH_ACTIVITIES_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            error:false,
            formError:{},
            CompletionSuccess:false,
            errorMessage:'',
        }
          default:
              return state;
      }
  } 

  export default activityReducer;