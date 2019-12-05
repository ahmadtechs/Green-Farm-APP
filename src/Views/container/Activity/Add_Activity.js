import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withStyles } from "@material-ui/core/styles";
import {Button, TextField, Typography, IconButton} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CloseIcon from '@material-ui/icons/Close';
import { ActionsStyles } from '../Styles'
import { FormHelperText } from '@material-ui/core';
import {createAcitivity} from '../../../helpers/activities.helper'
import {getActivitiesSuccess} from "../../../actions/getActivity.action";




 class AddPromotion extends Component {
    constructor(props){
        super(props);
        this.state={
            anchorEl : null,
            name: '',
            nameError: false

        }
      }
    
      handleClickOpen = (e) => {
        this.setState({ anchorEl: e.currentTarget})
      }
      handleClose = () => {
        this.setState({ anchorEl : null, name: '',
        nameError: false })
      }
      
      handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value,
        })  
        if(this.state.name !== " "){
          this.setState({nameError: false})
      }
        }
    handleSelectChange = (e) =>{
        this.setState({
            [e.target.value] : e.target.value[0]
        })
    }

    
      
      
          
    handleSubmit = (e) =>{
        e.preventDefault()
        const { createAcitivity } = this.props
        let data = {
          'name': this.state.name,
          }
          if(this.state.name === ""){
            this.setState({nameError: true})
          }
          else if (this.state.name !== ""){
            this.setState({nameError: false, anchorEl: null})
            createAcitivity(data)
          }
          
    }
   

    render() {
    const { classes } = this.props
      const {formErrors}= this.state
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;

        return (
            <div>
            <div>
            <Button 
            aria-label="add" 
            className={classes.addButton}
            size="medium"
            onClick={this.handleClickOpen}>
            New Activity
             </Button>
            </div>
              <Popover
                    id={id}
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >

              <div className={classes.root}>
              <div className={classes.tops}>
               <CloseIcon className={classes.closeIcon} onClick={this.handleClose}/>
               </div>

              <div >
               <Typography className={classes.header}>
                Create New Activity
                </Typography>

              <form 
              onSubmit = {this.handleSubmit}
              className={classes.formWrapper}
              >
            <div>
            <TextField
                name="name"
                label="Name"
                error={this.state.nameError === true ? "error" : null}
                value={this.state.name}
                onChange={this.handleChange}
                className={classes.textFields}
                fullWidth
                margin="dense"
                variant="outlined"/>
      {this.state.nameError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
               
            <Button
            type="submit"
            variant="contained" 
            color="primary"
            fullWidth 
            className={classes.submitButton}  
            >
            Create
            </Button>
                </form>
                </div>
                </div>
              </Popover>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createAcitivity: (credential)=> dispatch(createAcitivity(credential))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(ActionsStyles, { withTheme: true })(AddPromotion));