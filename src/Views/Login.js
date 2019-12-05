import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField, withStyles, Button,
  Typography, InputAdornment,
  Link
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import classNames from 'classnames';
import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 35,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350,
    height: 80,
  },
  button: {
    backgroundColor: blue[500],
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    textTransform: 'capitalize',
    marginTop: 2,
    width: 280,
    height: 50,
    '&:hover': {
      backgroundColor: blue[800]
    },
  },

})


class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  };

  handleSubmit = (e) => {
    e.preventDefault()
  };

  render() {

    const { classes } = this.props
    return (

      <div className="">
        <Typography component='h1' align='left' style={{ padding: 10, fontSize: 24 }}>Login</Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-with-placeholder"
            label="Username"
            placeholder="Username"
            name="username"
            value={this.state.username}
            className={classes.textField}
            variant="outlined"
            onChange={this.handleChange('username')}
          />
          <TextField
            id="outlined-adornment-password"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Link href='' className={classes.link} style={{ color: 'rgb(21, 101, 192, 0.5)', paddingLeft: 10, marginTop: -20 }}>
            Forget your password?
        </Link>
        </form>
        <Button variant="contained" className={classes.button}>
          Login
         </Button>
      </div>
    )
  }
}
LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};
export default withStyles(styles)(LogIn)