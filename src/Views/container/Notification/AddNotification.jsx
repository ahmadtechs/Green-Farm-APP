import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import {Button, TextField, Typography, IconButton} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CloseIcon from '@material-ui/icons/Close';
import { ActionsStyles } from '../Styles'
import { FormHelperText } from '@material-ui/core';
import {addNotification} from '../../../helpers/addNotification.helper'
import {connect} from 'react-redux'

 class AddNotification extends Component {
    constructor(props){
        super(props);
        this.state={
            anchorEl : null,
            title: '',
            description: '',
            titleError: false,
            descriptionError: false
        }
      }
    
      handleClickOpen = (e) => {
        this.setState({ anchorEl: e.currentTarget})
      }
      handleClose = () => {
        this.setState({ anchorEl : null,title: '',
        description: '',
        titleError: false,
        descriptionError: false })
      }
      
      handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value,
        })  
        if(this.state.title !== " "){
            this.setState({titleError: false})
        }
        if( this.state.description !==" "){
            this.setState({ descriptionError: false})
        }

        }
    handleSelectChange = (e) =>{
        this.setState({
            [e.target.value] : e.target.value[0]
        })
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      const { addNotification } = this.props
      let data = {
        title: this.state.title,
        description: this.state.description
        }
        if(this.state.title === ""){
          this.setState({titleError: true})
        }
        if(this.state.description === ""){
          this.setState({descriptionError: true})
        }

        else if (this.state.title !== "" && this.state.description !== ""){
          this.setState({titleError: false, descriptionError: false, anchorEl: null})
          addNotification(data)
        }
        console.log(this.state.name,'name')
  }
   

    render() {
    const { classes } = this.props

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
            New Notification
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
                Create New Notification
                </Typography>

              <form 
              onSubmit = {this.handleSubmit}
              className={classes.formWrapper}
              onSubmit={this.handleSubmit}
              >
            <div>
            <TextField
                name="title"
                label="Title"
                error={this.state.titleError === true ? "error" : null}
                value={this.state.title}
                onChange={this.handleChange}
                className={classes.textFields}
                fullWidth
                margin="dense"
                variant="outlined"/>
              {this.state.titleError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}} >{"this field is required"}</FormHelperText>}

            </div>

            <div>
            <TextField
                name="description"
                label="Description"
                error={this.state.descriptionError === true ? "error" : null}
                value={this.state.description}
                onChange={this.handleChange}
                className={classes.textFields}
                fullWidth
                margin="dense"
                variant="outlined"/>
              {this.state.descriptionError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
            <Button
            type="submit"
            variant="contained" 
            color="primary"
            fullWidth 
            className={classes.submitButton}  
            >
            Create Notification
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
    addNotification: (userData)=> dispatch(addNotification(userData))
  }
}

export default connect(null,mapDispatchToProps)(withStyles(ActionsStyles, { withTheme: true })(AddNotification));