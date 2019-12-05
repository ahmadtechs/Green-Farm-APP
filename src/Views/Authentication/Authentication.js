import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { handleInputChange as handlePhoneNumberInputHelper, handleInputhelper } from '../../helpers/eventHandling';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Button, Fab, CircularProgress, Grow,Grid, FormHelperText, TextField, MenuItem} from '@material-ui/core';
import { ERROR_MESSAGE } from '../../Constants/error.constants';
import MessageCard from '../../components/MessageCard';
import Loader from 'react-loader-spinner'
import { userLogin } from '../../helpers/authentication.helper';

import { connect } from 'react-redux'
import { history } from '../../App';
import PropTypes from 'prop-types';
import Media from "react-media";
import styles from '../../styles/Authentication.styles'
// import { API } from '../../Constants/costants';

import { Fonts, Colors } from '../../styles/themes';


const numberRegex = RegExp('^[0-9]+$');
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });


  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};



export class Authentication extends Component {
  state = {
    isMobile:'',
    
      phone: '',
      firstname: '',
      lastname: '',
      password: '',
      usertypeid: '',
  
    
    SignupInputs: {
      firstname: '',
      lastname: '',
      signupphone: '',
      usertypeid: '',
      signuppassword: ''
    },
    
    formErrors: {
      usernameError: '',
      firstnameError: '',
      lastnameError: '',
      phoneError: '',
      passwordError: '',
      phoneError1: '',
      passwordError1: ''
    },
    /* form errors */
    signinFormError: false,
    signupFormError: false,
    nextPhase: false,
    loginbtnIsLoading: false,
    loading: false,
    showPassword: false,
    formStatus: false,
    serverError: false
  }

  componentDidMount(){
    const {isLoggedIn}=this.props.authState
    if (isLoggedIn) return history.push('/');
  }
  
  componentDidUpdate = (prevProps) => {
    if (prevProps.initSignUpSuccess !== this.props.initSignUpSuccess) {
      if (this.props.initSignUpSuccess === true) {
        this.setState({ nextPhase: this.props.initSignUpSuccess })
      }
      if (prevProps.OtpServerError !== this.props.OtpServerError) {
        if (this.props.OtpServerError===true) {
          this.setState({ otpFormError: true }, () =>
            this.ErrorTimer = setTimeout(() => this.setState({ otpFormError: false }), 3500))
        }
      }

    }
  }
  componentWillUnmount = () => {
    clearTimeout(this.timer, this.ErrorTimer)

  }

  spinButton = () => {
    if (!this.state.loading) {
      this.setState(
        { loading: true }, () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false, //fab button loader
              // nextPhase: true, //set it to  true to show otp page
            });
          }, 3000);
        },
      );
    }
  }

  
  
  handleButtonClick = () => {
    this.spinButton();
    if (!this.state.nextPhase) {
      this.handlesubmitInitSignUp()
    } else {
      this.handleSubmitOtp()
    }
  };

  showLoader = () => {
    this.setState({ loginbtnIsLoading: true });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));

  };

  handleToggleForm = () => {
    this.setState(prevState => ({ formStatus: !prevState.formStatus }));
    if (this.state.formStatus) {
      this.setState({ signupChecked: false, emailError: false, nameError: false })
    } else {
      /* 
      when toggled to sign-in unmount the otp form 
      by setting next phase to false
       */
      this.setState({ signupChecked: true, nextPhase: false })
    }
  }


 
  
  


  /*
   handle Submit buttons here
   */

  

  handleChange =(e) =>{
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
     
      case "phone":
        formErrors.usernameError = numberRegex.test(value) && value.length == 11  ? "" : value ===""  ? "this field is required" :"invalid phone number";
        break;
      case "sigupphone":
        formErrors.usernameError = numberRegex.test(value) && value.length == 11  ? "" : value ===""  ? "this field is required" :"invalid phone number";
        break;
        case "firstname":
        formErrors.firstnameError =  value ===""  ? "this field is required" :"";
        break;
      case "lastname":
        formErrors.lastnameError =  value ===""  ? "this field is required" :"";
       
        break;
      default:
        break;
    }
  
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  
    //this.setState({[e.target.name]: e.target.value})
  
  }
  handleSignUpChange =(e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }
  handleSignInChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  // form validator
validate = () => {
  

  
  if(this.state.loginphone ===""){
    this.state.formErrors.usernameError ="Username field is required"
  }
  
  
      return true;
};

handleSigninButton = (e) => {
  e.preventDefault();
  
  const {userLogin} = this.props
  const {data} = this.props.authState
    let credentials = { 
      'phone': this.state.phone, 
      'password': this.state.password
     }
     if ((!this.state.phone || !this.state.password) ) {
      this.setState({ signinFormError: true }, () =>
        this.ErrorTimer = setTimeout(() => this.setState({ signinFormError: false }), 3500)
      )
    } else{
      userLogin(credentials)
      console.log(data, 'data from auth')
    }
    
     console.log(credentials, 'data')
  
}
  /*
  end handle submit buttons
  */
 handlesubmitSignUp = (e) => {
   e.preventDefault()
  

}

  renderServerError = (errorMessage) =>{
    return <MessageCard type="error" Message={errorMessage}/>
  }
  RenderSignInError = () => {
    if (this.state.signinFormError) return <MessageCard type="error" Message={ERROR_MESSAGE.SIGN_IN_INVALID} />
  }

  render() {
  
    const {
      formStatus,
      SignupInputs,
      signinFormError,
      formErrors,
    } = this.state;
    const { classes } = this.props;
    const {isLoading,loginError,loginErrorMessage} =this.props.authState;
    const { textField, resize, phoneInputprops } = classes;
    

    
    /*Render Sign up and otp*/
    
    const RenderSignInForm = () => {
      return (
        <Grow {...(!formStatus ? { timeout: 1000 } : {})} style={{transformOrigin: '0 0 0'}}  in={!formStatus}>
        <div className="signin-container">
        <Media query="(max-width: 520px)" onChange={matches => this.setState({ isMobile: matches })
        } />
        <div style={{ position: 'relative', top: -35 }}>
          {this.RenderSignInError()}
          {loginError && this.renderServerError(loginErrorMessage)}

        
        </div>
          <form onSubmit={this.handleSigninButton}>
            <FormControl className={classNames(textField,classes.dense,this.state.isMobile? classes.mobileTextField:'')}>
              <InputLabel className={phoneInputprops} htmlFor="email">Username</InputLabel>
              <Input id="email" name="phone" className={resize}  value={this.state.phone} onChange={this.handleSignInChange} />
            </FormControl>
          
            <FormControl className={classNames(classes.margin, classes.textField,this.state.isMobile? classes.mobileTextField:'')}>
              <InputLabel className={phoneInputprops} htmlFor="password">Password</InputLabel>
              <Input
                className={resize}
                id="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleSignInChange}
                name='password'
                endAdornment={
                  <InputAdornment position="end" style = {{paddingBottom: 7}}>
                    <IconButton aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}>
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            
            
            <Button
              
              disableRipple={isLoading}
              disableFocusRipple={isLoading}
              type="submit"
              variant="contained"
              disabled={isLoading || signinFormError}
              className={classNames(classes.button, this.state.isMobile? classes.mobileButton:'')}
              style={{
                backgroundColor: isLoading || signinFormError ? '#138E5A' : '#00854D'
              }}
            >
            <span>{isLoading ||signinFormError ? <Loader type="ThreeDots"
                color="#f4f4f4"
                height="30"
                width="30" /> : 'Sign In'}
              </span>
             
            </Button>
          </form>
        </div>
        </Grow>
      )
    }
          
    const renderForm = () => {
      return (
        <>{ RenderSignInForm() }</>
      )
    }
    return (
      <div>
        <h4 className="form-header" style={{fontFamily:Fonts.primary, color: '#00854D'}}>{ <span>Sign In</span>}</h4>
        {renderForm()}
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authState:state.isAuthenticated,

    /***sign up module global state***/
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
    

  }
}

Authentication.propTypes = {
  classes: PropTypes.object.isRequired,
  RenderOtpError:PropTypes.func.isRequired,
  initSignupdataHandler: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Authentication))
