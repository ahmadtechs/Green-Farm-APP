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
      GET_STAGE_COMPLETION_SUCCESS,
      GET_STAGE_COMPLETION_REQUEST,
      GET_STAGE_COMPLETION_SUCCESS_ERROR,
  } = ACTIONS

  
 const getStageReducer = (state = InitState, action) =>{
      switch (action.type) {
          case GET_STAGE_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case GET_STAGE_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,...action.payload},
        }
        case GET_STAGE_COMPLETION_SUCCESS_ERROR:
        return{
            isLoading:false,
            CompletionSuccess:false,
            error:true,
            errorMessage:action.payload.message,
            formError:action.payload.formErrors,
        }
        
          default:
              return state;
      }
  } 

  export default getStageReducer;