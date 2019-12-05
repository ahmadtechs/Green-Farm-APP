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
      ADD_STAGE_COMPLETION_SUCCESS,
      ADD_STAGE_COMPLETION_REQUEST,
      ADD_STAGE_COMPLETION_SUCCESS_ERROR,
  } = ACTIONS

  
 const addStageReducer = (state = InitState, action) =>{
      switch (action.type) {
          case ADD_STAGE_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case ADD_STAGE_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,...action.payload},
        }
        case ADD_STAGE_COMPLETION_SUCCESS_ERROR:
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

  export default addStageReducer;