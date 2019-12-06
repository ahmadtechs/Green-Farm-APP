import React, { Component } from 'react'
// import classNames from 'classnames';
import { withStyles,Grow, Grid,Card,MenuItem, Button,IconButton, InputAdornment,InputLabel, FormControl, Typography,FormHelperText,TextField } from '@material-ui/core';
import {Visibility, VisibilityOff  }from '@material-ui/icons';
import axios from 'axios'
import MessageCard from '../../../components/MessageCard'

 const style = theme =>({
  wrapper:{
    width: '0%',
  },
    root : {
        alignItems: 'center',
        justifyContent : 'center',
        display : 'flex',
        marginTop : '5%'
    },
    formWrapper:{
        alignItems: 'center',
        justifyContent : 'center',
        display : 'flex',
        flexDirection: 'column',
        width: '140%'
    },
    textFields:{
      width: '130%'
    },
    submit:{
      width: '130%',
      backgroundColor:  "#00854D",
      color: 'white'
    },
    card:{
        alignItems: 'center',
        justifyContent : 'center',
        display : 'flex',
        padding: '5%',
        width: '30%',
    }
 })

class User extends Component {

    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            role: '',
            phone: '',
            password: '',
            showPassword: false,

        }
    }
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    
      };
      handleClick =()=>{
        let data = {
          'phone': this.state.phone,
            'firstname': this.state.fname,
            'lastname': this.state.lname,
            'password': this.state.password,
            'usertypeid': 1,
        }
          setTimeout(()=>{
          axios.post('https://bhfarmers.herokuapp.com/users',data)
          .then(data => {
              console.log(data,'created user')
              this.setState({
                fname: '',
                lname: '',
                role: '',
                phone: '',
                password: '',
                showPassword: false,
              })
              window.location.replace('/')
          }).catch(err => {
              console.log(err)
              setTimeout(()=>{
                  return <MessageCard type="error"  
                  Message={err}/>
              },3000)
          })
        }, 100)
      }
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
          })
    }
    render() {
        const {classes} = this.props
        // const { textField, resize, phoneInputprops } = classes;
        return (
          <div className={classes.root}>
          <Card className={classes.card}>
          <form className={classes.formWrapper} noValidate autoComplete="on">
          <TextField
                name="fname"
                label="First Name"
                value={this.state.fname}
                onChange={this.handleChange}
                className={classes.textFields}
                margin="dense"
                variant="outlined"/>
          <TextField
                name="lname"
                label="Last Name"
                value={this.state.lname}
                onChange={this.handleChange}
                className={classes.textFields}
                margin="dense"
                variant="outlined"/>
              <TextField
                name="phone"
                label="Phone Number"
                value={this.state.phone}
                onChange={this.handleChange}
                className={classes.textFields}
                margin="dense"
                variant="outlined"/>
              <TextField
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className={classes.textFields}
                margin="dense"
                variant="outlined"/>
              <TextField
                name="copassword"
                label="Confirm Password"
                className={classes.textFields}
                //  className={resize}
                type={this.state.showPassword ? 'text' : 'password'}
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"/>
              <Button
              onClick={this.handleClick}
              className={classes.submit}
              variant="contained"
            >
               Create
             
            </Button>
                </form>
                </Card>
                </div>
                
        )
    }
}
export default withStyles(style)(User);