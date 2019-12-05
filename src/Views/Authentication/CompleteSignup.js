// import React, { Component } from 'react'
// import classNames from 'classnames';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { Card, withStyles, Grid, TextField, Select,  MenuItem, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, Link, FormHelperText } from '@material-ui/core';
// import PhoneInput from '../../components/formInputs/PhoneInput';
// import { changeToOptionItem, getUserCountryData } from '../../helpers/handleCountryCode';
// import { Countries } from '../../services/countries';
// import { handleInputChange as handlePhoneInputHelper, handleInputhelper } from '../../helpers/eventHandling';
// import { styles } from '../../styles/completeSignup.styles'
// import { history } from '../../App';
// import Loader from 'react-loader-spinner';
// import { connect } from 'react-redux'
// import Icon from '@material-ui/core/Icon';
// import { validatePhone, validateInputs, passwordChecker } from '../../helpers/ValidationHelper';
// import { completeUserSignUp } from '../../helpers/completeSignUp.helper';
// import { Colors, Fonts } from '../../styles/themes';
// import MessageCard from '../../components/MessageCard';

// const countries = changeToOptionItem(Countries)
// const DEFAULT_DIAL_CODE = countries[0].id;
// export class CompleteSignup extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       organisation: {
//         phone: {
//           number: '',
//           code: DEFAULT_DIAL_CODE,
//         },
//         name: '',
//         email: '',
//         type: '',
//         size: '',
//         address: '',
//         website:'',
//       },
//       account: {
//         name: '',
//         email: '',
//         phone: {
//           number: '',
//           code: DEFAULT_DIAL_CODE,
//         },
//         password: '',
//         passwordC: '',
//       },
//       orgInputErrors:{
//         nameError:false,
//         addressError:false,
//         websiteError:false,
//         businessSizeError:false,
//         businessTypeError:false,
//         phoneError:false,
//         emailError:false,
//       },
//       acountInputErrors:{
//       nameError:false,
//       emailError:false,
//       passwordError:false,
//       passwordConfirmError:false,
//       phoneError: false,
//       },
//       formError:false,
//       labelWidth: 0,
//       phoneIsDisabled: false,
//       showPassword: false,
//       showVerifyPassword: false,
//     }
//   }

//   setInitInputState = ()=>{
//     const {InitSignUpData, location} =this.props;
//     // console.log(location.state);
//     // const pathIsOk = location.state.pathRoute;
//     // if(pathIsOk){
//       return  this.setState({
//         organisation: {
//           ...this.state.organisation,
//           email:InitSignUpData['email'],
//            name:InitSignUpData['business-name'],
//            phone:{
//             number:InitSignUpData['phone'],
//             code:InitSignUpData['dial-code'],
//           }
//         },
//         account:{
//           ...this.state.account,
//           email:InitSignUpData['email'],
//            name:InitSignUpData['business-name'],
//            phone:{
//             number:InitSignUpData['phone'],
//             code:InitSignUpData['dial-code'],
//            }
//           }
//       }, () => {
//         const { phone } = this.state.organisation;
//         if (phone['number'] && phone['code']) {
//           this.setState({ phoneIsDisabled: true })
//         }
//       })
     
//     // }else{
//     //    return history.push('/');
//     //  }
//   }

//   handleChange = (e) => {
//     const { organisation } = this.state;
//     const { value, name } = e.target
//     this.setState({
//       organisation: {
//         ...organisation,
//         [name]: value
//       }
//     })
//   }

//   /** 
//    * name `check histroy route`
//    * @param {string} 
//    * if authenticated user try accessing this page,
//    * take him back to the dashboard;
//    * */ 
//   checkHistoryRoute = ()=>{
//     const {isLoggedIn} = this.props;
//     if(isLoggedIn===true){
//       return history.push('/')
//     }
//   }
//   componentDidMount = () => {
//     this.setInitInputState(); 
//   clearTimeout(this.ErrorTimer);
//     // this.checkHistoryRoute()
//   }


  
//   handleClickShowVerifyPassword = () => {
//     this.setState(state => ({ showVerifyPassword: !state.showVerifyPassword }));
//   };
//   handleClickShowPassword = () => {
//     this.setState(state => ({ showPassword: !state.showPassword }));
//   };

//   handlePasswordConfirmation =(e)=>{
// const {name,value} = e.target;
// this.setState({account:{
//   ...this.state.account,
//   [name]:value
// }
// },()=>{
//   if(this.state.account['passwordC']!==this.state.account['password']){
//     this.setState({acountInputErrors:{
//       ...this.state.acountInputErrors,
//       passwordConfirmError:true
//     }})
//   }else{
//     this.setState({acountInputErrors:{
//       ...this.state.acountInputErrors,
//       passwordConfirmError:false
//     }})
//   }
// })

//   }

//   handleFormSubmit=()=>{

// const {account,organisation, acountInputErrors} = this.state;

// const accountInputIsValid = validateInputs(acountInputErrors, true)
// const organisationInputIsNonEmpty = validateInputs(organisation, '')
// const accountInputIsNonEmpty = validateInputs(account, '');
// const orgInputsIsValid = validateInputs(this.state.orgInputErrors, true)

//     if(organisationInputIsNonEmpty||orgInputsIsValid||accountInputIsValid||accountInputIsNonEmpty){
//       this.setState({formError:true})
//      return this.ErrorTimer = setTimeout(() => this.setState({ formError: false }), 3000);
//     }else{
//      const countryData = getUserCountryData(account['phone']['code'])
//      const {phone, ...others} = organisation
//      const {number} = phone;
//       const credentials={
//         business:{
//           'country-code':countryData['country-code'],
//           'country':countryData['country-name'],
//           'phone':number,
//           ...others,
//         },
//         profile:{
//           'name':account.name,
//           'phone':account.phone['number'],
//           'email':account.email,
//           'password':account.password,
//           'confirm-password':account.passwordC,
//         }
//       }
//       this.props.completeUserSignUp(credentials)
//     }
//   }

//   handleorgPhoneInputChange = (event) => {
//     const organisation = handlePhoneInputHelper(event, this.state.organisation);
//     this.setState({ organisation })
//   }

//   handleorgInputsChange = (event) => {
//     const { newInputState } = handleInputhelper(event, this.state.organisation)
//     this.setState({ organisation: newInputState })
//   }

//   handleAccountInputChange = (event) => {
//     const account = handlePhoneInputHelper(event, this.state.account)
//     const { phoneError } = validatePhone(account['phone']['number'], account['phone']['code'])
//     this.setState({ account, 
//       acountInputErrors:{
//         ...this.state.acountInputErrors,
//         phoneError,
//       }
//     })
//   }

//   handleorgformInputChange=(event)=>{
//     const {newInputState, websiteError,addressError, businessSizeError,businessTypeError} = handleInputhelper(event, this.state.organisation)
//   this.setState({ organisation:newInputState})
//   if(addressError !==undefined){
//   return  this.setState({
//       orgInputErrors:{
//         ...this.state.orgInputErrors,
//         addressError,
//       }
//     })
//   }
//   if(businessSizeError !==undefined){
//   return  this.setState({
//       orgInputErrors:{
//         ...this.state.orgInputErrors,
//         businessSizeError,
//       }
//     })
//   }
//   if(businessTypeError !==undefined){
//    return this.setState({
//       orgInputErrors:{
//         ...this.state.orgInputErrors,
//         businessTypeError,
//       }
//     })
//   }
//   if( websiteError!==undefined){
//   return  this.setState({
//       orgInputErrors:{
//         ...this.state.orgInputErrors,
//         websiteError,
//       }
//     })
//   }
// }
  
//   handleOtherInputChange =(event)=>{
//     const {newInputState, nameError,emailError,passwordError} = handleInputhelper(event, this.state.account)
//     this.setState({account:newInputState})
//     if(nameError !==undefined){
//       this.setState({
//         acountInputErrors:{
//             ...this.state.acountInputErrors,
//             nameError:nameError
//           }
//         })
//     }
//     if(emailError !==undefined){
//       this.setState({
//         acountInputErrors:{
//             ...this.state.acountInputErrors,
//             emailError,
//           }
//         })
//     }
//     if(passwordError !==undefined){
//       this.setState({
//         acountInputErrors:{
//             ...this.state.acountInputErrors,
//             passwordError
//           }
//         })
//     }
//   }

//   render() {
//     const { classes, isLoading } = this.props;
//     const {orgInputErrors}= this.state
//     const {nameError,passwordError,emailError, passwordConfirmError}= this.state.acountInputErrors
//     const formInputProps = {
//       InputLabelProps:{
//         classes: {
//             root: classes.label,
//         }
//     },
//     InputProps:{
//         classes: {
//             input: classes.size,
//         },
//     }
//     }
   
//     return (
//       <div>
//         <Card className='primary-card'>
//         <div style={{position:'absolute', top:40,width:'100%'}}>
//         {this.state.formError && <MessageCard Message='Form error' />}
//         </div>
//           <div className="signup-header">
//             <p>Complete SignUp</p>
//           </div>
//           <form className='form-div'>
//             <Grid container spacing={24}>
//               <Grid item xs={12} style={{ marginBottom: -20, alignItems: 'left' }}>
//                 <p className='org-form-header'>Organisational Information</p>
//               </Grid>

//               <Grid item xs={12} sm={6} style={{ alignSelf: 'left', alignItems: 'left' }}>
//                 <TextField
//                   {...formInputProps}
//                   InputLabelProps={{
//                     shrink: true
//                   }}
//                   id="business"
//                   label="Business Name"
//                   name="name"
//                   InputClassName={classes.theInput}
//                   value={this.state.organisation.name}
//                   className={classes.textField}
//                   variant="outlined"
//                   disabled
//                   onChange={this.handleorgPhoneInputChange}
//                 />
//               </Grid>
             
//               <Grid item xs={12} sm={6}>
//                 <TextField
//               {...formInputProps}
//                   id="email"
//                   label="Email"
//                   name="email"
//                   error={orgInputErrors.emailError}
//                   value={this.state.organisation.email}
//                   className={classes.textField}
//                   variant="outlined"
//                   disabled
//                   onChange={this.handleorgformInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//               {...formInputProps}
//                   id="url"
//                   label="Website"
//                   name="website"
//                   error={orgInputErrors.websiteError}
//                   placeholder='www.'
//                   value={this.state.organisation.website}
//                   className={classes.textField}
//                   variant="outlined"
//                   onChange={this.handleorgformInputChange}
//                   InputProps={{
//                     classes: {
//                       input: classes.size,
//                   },
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton>
//                       <Icon>language</Icon>
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                   {orgInputErrors.websiteError && <FormHelperText className={classes.FormHelperText} style={{marginTop:'0.3em'}} >Please enter a valid organisation website.</FormHelperText>}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl variant="outlined" disabled className={classNames(classes.textField)}>
//                   <PhoneInput disabled={this.state.phoneIsDisabled} inputType='org' id="organisation" phoneState={this.state.organisation.phone} countries={countries} onChange={this.handleorgPhoneInputChange} />
//                 </FormControl>
//               </Grid>
//               <Grid item xs={6} sm={6}>
//               <FormControl variant="outlined" className={classes.textField}>
//                   <InputLabel ref={ref => {
//                     this.InputLabelRef = ref;
//                   }} htmlFor="type">
//                     Business type
//             </InputLabel>
//                   <Select
//                    inputProps={{  classes: {
//                     select: classes.select,
//                 },
//                 }}
//                     error={orgInputErrors.businessTypeError}
//                     name="type"
//                     label="Business type"
//                     value={this.state.organisation.type}
//                     onChange={this.handleorgformInputChange}
//                   >
//                     <MenuItem value="" disabled>
//                       <em >Select Business type</em>
//                     </MenuItem>
//                     <MenuItem value='Industrial'>Industrial</MenuItem>
//                     <MenuItem value='Service Providers'>Service Providers</MenuItem>
//                     <MenuItem value='Ecommerce'>Ecommerce</MenuItem>
//                   </Select>
//                 </FormControl>
//                 {orgInputErrors.businessTypeError && <FormHelperText className={classes.FormHelperText} style={{marginTop:'0.3em'}} >{!this.state.organisation.type.length?'Business type field is required':''}</FormHelperText>}

//               </Grid>
//               <Grid item xs={6}>
//                 <FormControl variant="outlined" className={classes.textField}>
//                   <InputLabel ref={ref => {
//                     this.InputLabelRef = ref;
//                   }} htmlFor="size">
//                     Business Size
//             </InputLabel>
//                   <Select
                  
//                    inputProps={{  classes: {
//                     select: classes.select,
//                 },
//                 }}
//                     name="size"
//                     error={orgInputErrors.businessSizeError}
//                     label="Business size"
//                     value={this.state.organisation.size}
//                     onChange={this.handleorgInputsChange}
//                   >

//                     <MenuItem value="" disabled>
//                       <em >Select Business size</em>
//                     </MenuItem>
//                     <MenuItem value='Enterprise'>Large</MenuItem>
//                     <MenuItem value='Industrial'>Small</MenuItem>
//                     <MenuItem value='Trade'>Medium</MenuItem>
//                   </Select>
//                 </FormControl>
//                 {orgInputErrors.businessSizeError && <FormHelperText className={classes.FormHelperText} style={{marginTop:'0.3em'}} >{!this.state.organisation.size.length?'Business size field is required':''}</FormHelperText>}
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl className={classNames(classes.textField)}>
//                   <InputLabel {...formInputProps}  htmlFor="address">Enter Business Address</InputLabel>
//                   <Input id="address" type='address' error={this.state.orgInputErrors.addressError} inputProps={{  classes: {   input: classes.size,root:classes.label}}} name="address" value={this.state.organisation.address} onChange={this.handleorgformInputChange} />
//                   {orgInputErrors.addressError && <FormHelperText className={classes.FormHelperText} style={{marginTop:'0.3em'}} >{!this.state.organisation.address.length?'Address field is required':''}</FormHelperText>}
//                 </FormControl>
//               </Grid>

//               <Grid item xs={3} sm={4}>
//                 <div className='account-info'>
//                   <hr height='20%' />
//                 </div>
//               </Grid>
//               <Grid item xs={6} sm={4}>
//                 <p className='buis-info-header '>Account Information</p>
//               </Grid>
//               <Grid item xs={3} sm={4}>
//                 <div className="account-info" >
//                   <hr height='20%' />
//                 </div>
//               </Grid>
//               <Grid item xs={12} style={{ alignSelf: 'left', alignItems: 'left' }}>
//                 <TextField
//                 {...formInputProps}
//                   id="accountName"
//                   label='Name'
//                   error={nameError}
//                   name="name"
//                   value={this.state.account.name}
//                   className={classes.textField}
//                   variant="outlined"
//                   onChange={this.handleOtherInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} style={{ alignSelf: 'left', alignItems: 'left' }}>
//                 <TextField
//                 {...formInputProps}
//                   id="accountEmail"
//                   label='Email'
//                   name="email"
//                   error={emailError}
//                   value={this.state.account.email}
//                   className={classes.textField}
//                   variant="outlined"
//                   onChange={this.handleOtherInputChange}
//                   />
//                    {this.state.acountInputErrors.emailError && <FormHelperText className={classes.FormHelperText} >Invalid email address</FormHelperText>}
//               </Grid>
//               <Grid item xs={12} sm={6} >
//                 <FormControl className={classes.textField}>
//                   <PhoneInput inputType="acc" id="account" phoneState={this.state.account.phone} countries={countries} onChange={this.handleAccountInputChange} />
//                   {this.state.acountInputErrors.phoneError &&  <FormHelperText className={classes.helperTexts} style={{paddingLeft:15,flexDirection:'row'}}>Invalid country phone number</FormHelperText>}                  
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                  {...formInputProps}
//                   id="password"
//                   name="password"
//                   error={passwordError}
//                   className={classNames(classes.textField)}
//                   variant="outlined"
//                   type={this.state.showPassword ? 'text' : 'password'}
//                   label="Password"
//                   value={this.state.account.password}
//                   onChange={this.handleOtherInputChange}
//                   InputProps={{
//                     classes: {
//                       input: classes.size,
//                   },
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="Toggle password visibility"
//                           onClick={this.handleClickShowPassword}
//                         >
//                           {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                {this.state.acountInputErrors.passwordError && <FormHelperText className={classes.FormHelperText} >{ passwordChecker(this.state.account.password)}</FormHelperText>}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                 {...formInputProps}
//                   id="verify"
//                   name="passwordC"
//                   className={classNames(classes.textField)}
//                   error={passwordConfirmError}
//                   variant="outlined"
//                   type={this.state.showVerifyPassword ? 'text' : 'password'}
//                   label="Verify Password"
//                   value={this.state.account.passwordC}
//                   onChange={this.handlePasswordConfirmation}
//                   InputProps={{
//                     classes: {
//                       input: classes.size,
//                   },
//                     endAdornment: (
//                       <InputAdornment position="end"
//                       // className={classes.icon}
//                       >
//                         <IconButton
//                         // iconStyle={styles.Icon}
//                       //  className={classes.icon}
//                           onClick={this.handleClickShowVerifyPassword}
//                         >
//                           {this.state.showVerifyPassword ? <Visibility   iconStyle={classes.icon} /> : <VisibilityOff   iconStyle={classes.icon}/>}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 {this.state.acountInputErrors.passwordConfirmError && <FormHelperText className={classes.FormHelperText} >Password missmatch!</FormHelperText>}
//               </Grid>
//               <Grid item xs={12}>
//                 <div className='form-text'>

//                   <p style={{paddingLeft:0}} className={classes.smallText}>By creating an account with Payroll you have agreed to Stetis Payroll Terms of Use and Privacy Policy</p>
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={12} >
//                 <Button variant="contained" 
//                 disabled={isLoading}
//                 style={{
//                   backgroundColor: isLoading ? Colors.blueSecondary : ''
//                 }}
//                 disableRipple={isLoading}
//                 onClick={this.handleFormSubmit}
//                  className={classes.button}
//                  >
//                   <span className='submit-btn'>{isLoading ?  <Loader type="ThreeDots"
//                 color="#f4f4f4"
//                 height="30"
//                 width="30" />: 'Create Account'}</span>
//                 </Button>
//                 <p className="notice-text" style={{color:Colors.grey,fontFamily:Fonts.primary}}>Already have an account? <span className="notice-btn-text" style={{color:Colors.blue}} onClick={()=> history.push('/auth')}> Sign In</span></p>
//               </Grid>
//             </Grid>
//           </form>
//         </Card>
//       </div >
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     InitSignUpData: state.initSignup.InitSignUpData,
//     isLoggedIn: state.isAuthenticated.isLoggedIn,
//     /*Complete Sign up states */
//     isLoading:state.signUpCompletion.isLoading,
//     serverError:state.signUpCompletion.error,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//      completeUserSignUp : (credential) => dispatch(completeUserSignUp(credential))
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(CompleteSignup))
