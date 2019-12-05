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
      ADD_BASIN_COMPLETION_SUCCESS,
      ADD_BASIN_COMPLETION_REQUEST,
      ADD_BASIN_COMPLETION_SUCCESS_ERROR,
      REFRESH_ADD_BASIN_COMPLETION_SUCCESS,
  } = ACTIONS

  
 const addBasinReducer = (state = InitState, action) =>{
      switch (action.type) {
          case ADD_BASIN_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case ADD_BASIN_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,...action.payload},
        }
        case ADD_BASIN_COMPLETION_SUCCESS_ERROR:
        return{
            isLoading:false,
            CompletionSuccess:false,
            error:true,
            errorMessage:action.payload.message,
            formError:action.payload.formErrors,
        }
        case REFRESH_ADD_BASIN_COMPLETION_SUCCESS:
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

  export default addBasinReducer;