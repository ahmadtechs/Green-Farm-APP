import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import {Button, TextField, Typography,MenuItem, IconButton} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CloseIcon from '@material-ui/icons/Close';
import { ActionsStyles } from '../Styles'
import { FormHelperText } from '@material-ui/core';
import {addCrop} from '../../../helpers/addCrop.helper'
import {connect} from 'react-redux'

 class AddCrops extends Component {
    constructor(props){
        super(props);
        this.state={
            anchorEl : null,
            name: '',
            type: '',
            nameError: false,
            typeError: false
        }
      }
    
      handleClickOpen = (e) => {
        this.setState({ anchorEl: e.currentTarget})
      }
      handleClose = () => {
        this.setState({ anchorEl : null, name: '',
        type: '',
        nameError: false,
        typeError: false })
      }
      
      handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value,
        })  
        if(this.state.name !== " "){
          this.setState({nameError: false})
      }
      if( this.state.type !==" "){
          this.setState({ typeError: false})
      }
        }
    handleSelectChange = (e) =>{
        this.setState({
            [e.target.value] : e.target.value[0]
        })
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      const { addCrop } = this.props
      let data = {
        name: this.state.name,
        type: this.state.type
        }
        if(this.state.name === ""){
          this.setState({nameError: true})
        }
        if(this.state.type === ""){
          this.setState({typeError: true})
        }

        else if (this.state.name !== "" && this.state.type !== ""){
          this.setState({nameError: false, anchorEl: null})
          addCrop(data)
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
            New Crop
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
                Create New Crops
                </Typography>

              <form 
              onSubmit = {this.handleSubmit}
              className={classes.formWrapper}
              onSubmit={this.handleSubmit}
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
              {this.state.nameError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}} >{"this field is required"}</FormHelperText>}

            </div>

            <div>
            <TextField
                name="type"
                label="Type"
                error={this.state.typeError === true ? "error" : null}
                select
                value={this.state.type}
                onChange={this.handleChange}
                className={classes.textFields}
                fullWidth
                margin="dense"
                variant="outlined">
                  <MenuItem value='mango'>Mango</MenuItem>
                </TextField>
              {this.state.typeError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
            <Button
            type="submit"
            variant="contained" 
            color="primary"
            fullWidth 
            className={classes.submitButton}  
            >
            Create Crop
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
    addCrop: (userData)=> dispatch(addCrop(userData))
  }
}

export default connect(null,mapDispatchToProps)(withStyles(ActionsStyles, { withTheme: true })(AddCrops));