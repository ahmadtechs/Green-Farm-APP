import {
    ACTIONS
    } from '../Constants/ACTIONS'

    const InitState = {
        InitSignUpData:{
            'firstname':'', 
            'lastname':'',
            'phone':'', 
            'password':'', 
        },
        errorMessage:'',
        iniSignUpisLoading:false,
        initSignUpError:false,
        initSignUpSuccess:false,
      }
      const emptyData={
        'firstname':'', 
        'lastname':'',
        'phone':'', 
        'password':'',
         }
      
const {
    INITIATE_SIGN_UP_REQUEST,
    INITIATE_SIGN_UP,
    INITIAL_SIGN_UP_ERROR,
    REFRESH_SIGNUP_REQUEST,
  } = ACTIONS;

  const initSignup =(state =InitState, action)=>{
      switch (action.type) {
          case INITIATE_SIGN_UP_REQUEST:
              return{
                  ...state,
                  errorMessage:'',
                  iniSignUpisLoading:true,
                  initSignUpSuccess:false,
                  initSignUpError:false,
                  InitSignUpData:emptyData,
              }
              case INITIATE_SIGN_UP:
                  return{
                    ...state,
                    OtpError:false,
                    errorMessage:'',
                    initSignUpError:false,
                    InitSignUpData:{...state.InitSignUpData, ...action.payload},
                    initSignUpSuccess:true,
                    iniSignUpisLoading:false,
                  }

            case INITIAL_SIGN_UP_ERROR:
            return{
                ...state,
                errorMessage:action.payload,
                initSignUpError:true,
                initSignUpSuccess:false,
                iniSignUpisLoading:false,
                InitSignUpData:emptyData
            }
            
            case REFRESH_SIGNUP_REQUEST:
            return{
                ...state,
                initSignUpError:false,
                initSignUpSuccess:false,
                errorMessage:'',

            }
         
          default:
              return state;
      }
  }
  export default initSignup