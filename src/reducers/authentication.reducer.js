import {
ACTIONS
} from '../Constants/ACTIONS'

const InitState = {
  token:{},
  loginErrorMessage:'',
  isLoading:false,
  loginError:false,
  isLoggedIn:false,
  isLoadingData:false,
  loginSuccess:false,
  dataError:false,
  dataErrorMessage:'',
}
const {
  LOGIN_REQUEST,
  LOGIN,
  REFRESH_LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_INVALID,
} = ACTIONS;


/**
 * - Shows if the user has logged in successfully
 * - `true` if authentiated
 * - `false` otherwise
 * - default: `false`
 * @param  {Boolean} state
 * @param  {Object} action
 * @return {Boolean}
 */


const isAuthenticated = (state = InitState, action) => {
    
    switch(action.type){
      case LOGIN_REQUEST:
      return{
        ...state,
        loginErrorMessage:'',
        loginError:false,
        token:{},
        isLoading:true,
        loginSuccess:false,
        isLoggedIn:false,
      }
      case LOGIN:
      return{
        ...state,
        loginErrorMessage:'',
        token:{...state.token,...action.payload},
        isLoggedIn:true,
        loginError:false,
        isLoading:  false,
      }
      
      case LOGIN_INVALID:
      return{
        ...state,
        loginErrorMessage: action.payload,
        loginError:true,
        loginSuccess:false,
        isLoading:false,
      }
      case LOGIN_ERROR: 
        return{
          ...state,
          isLoading:false,
          loginError:true,
          loginSuccess:false,
          isLoggedIn:false,
        }
        case REFRESH_LOGIN_REQUEST:
        return{
          ...state,
          isLoading:false,
          loginError:false,
          loginSuccess:false,
          loginErrorMessage:'',
        }
      case LOGOUT:
      return  state=InitState
      default:
        return state;
    }
};

export default isAuthenticated