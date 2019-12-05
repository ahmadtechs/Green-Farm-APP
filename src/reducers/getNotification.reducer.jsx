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
      GET_NOTIFICATION_COMPLETION_SUCCESS,
      GET_NOTIFICATION_COMPLETION_REQUEST,
      GET_NOTIFICATION_COMPLETION_ERROR,
  } = ACTIONS

  
 const getNotificationReducer = (state = InitState, action) =>{
      switch (action.type) {
          case GET_NOTIFICATION_COMPLETION_REQUEST:
        return{
            isLoading:true,
            errorMessage:'',
            error:false,
            CompletionSuccess:false,
            formError:{},
        }
        case GET_NOTIFICATION_COMPLETION_SUCCESS:
        return{
            isLoading:false,
            CompletionSuccess:true,
            error:false,
            data:{...state.data,...action.payload},
        }
        case GET_NOTIFICATION_COMPLETION_ERROR:
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

  export default getNotificationReducer;