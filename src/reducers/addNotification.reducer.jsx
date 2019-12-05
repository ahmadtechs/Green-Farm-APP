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
      ADD_NOTIFICATION_COMPLETION_SUCCESS,
      ADD_NOTIFICATION_COMPLETION_REQUEST,
      ADD_NOTIFICATION_COMPLETION_ERROR,
  } = ACTIONS

  
 const addNotificationReducer = (state = InitState, action) =>{
      switch (action.type) {
          case ADD_NOTIFICATION_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case ADD_NOTIFICATION_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,...action.payload},
        }
        case ADD_NOTIFICATION_COMPLETION_ERROR:
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

  export default addNotificationReducer;