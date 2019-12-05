import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import {Button, TextField, Typography,MenuItem} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CloseIcon from '@material-ui/icons/Close';
import { ActionsStyles } from '../Styles'
import { FormHelperText } from '@material-ui/core';
import {addStage} from '../../../helpers/addSchedule.helper'
import {connect} from 'react-redux'

 class AddSchedule extends Component {
    constructor(props){
        super(props);
        this.state={
            anchorEl : null,
            activity: '',
            basin: '',
            crop: '',
            stage: '',
            supervisor : '',
            location : "",
            startdate: '',
            enddate: '',
            note: '',
            description: '',

            start_dateError: false,
            end_dateError: false,
            noteError: false,
            descriptionError: false
        }
      }
    
      handleClickOpen = (e) => {
        this.setState({ anchorEl: e.currentTarget})
      }
      handleClose = () => {
        this.setState({ 
            anchorEl : null,
         })
      }
      
      handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value,
        })  
        if(this.state.startdate !== " "){
            this.setState({start_dateError: false})
        }
        if( this.state.enddate !==" "){
            this.setState({ end_dateError: false})
        }
        if( this.state.note !==" "){
            this.setState({ noteError: false})
        }
        if( this.state.description !==" "){
            this.setState({ descriptionError: false})
        }
        }
    handleSelectChange = (e) =>{
        this.setState({
            [e.target.value] : e.target.value
        })
        
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const { addStage } = this.props
        const {activity, basin, crop, supervisor, stage, description, startdate, enddate, note, location} = this.state
        let data = {
            activityid : activity,
            basinid: basin,
            cropid: crop,
            assignedto: supervisor,
            stageid: stage,
            description: description,
            startdate: startdate,
            enddate: enddate,
            note: note,
            location: location,
          }
          if(this.state.startdate === ""){
            this.setState({start_dateError: true})
          }
          if(this.state.enddate === ""){
            this.setState({end_dateError: true})
          }
          if(this.state.note === ""){
            this.setState({noteError: true})
          }
          if(this.state.description === ""){
            this.setState({descriptionError: true})
          }
          else if (this.state.startdate && this.state.enddate && this.state.note && this.state.description    !== ""){
            this.setState({
            start_dateError: false,
            end_dateError: false,
            noteError: false,
            descriptionError: false, anchorEl: null})
            addStage(data)
          }
          console.log(data,'datas')
    }
   

    render() {
    const { classes, datum } = this.props

    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    const activityID = datum.activities && datum.activities.constructor === Array ? datum.activities.map((designations, id) => {
      return{
      value: designations.activityid, 
      label: designations.activityname
      }
   }) :  [] ; 
   const basinID = datum.basins && datum.basins.constructor === Array ? datum.basins.map((designations, id) => {
    return{
    value: designations.basinid, 
    label: designations.basinname
    }
 }) :  [] ; 
 const cropID = datum.crops && datum.crops.constructor === Array ? datum.crops.map((designations, id) => {
  return{
  value: designations.cropid, 
  label: designations.cropname
  }
}) :  [] ; 
  const stageID = datum.stages && datum.stages.constructor === Array ? datum.stages.map((designations, id) => {
    return{
    value: designations.stageid, 
    label: designations.stagename
    }
  }) :  [] ; 
    const supervisorsID = datum.supervisors && datum.supervisors.constructor === Array ? datum.supervisors.map((designations, id) => {
      return{
      value: designations.supervisorid, 
      label: designations.supervisorname
      }
   }) :  [] ; 

        return (
            <div>
            <div>
            <Button 
            aria-label="add" 
            className={classes.addButton}
            size="medium"
            onClick={this.handleClickOpen}>
            New Schedule
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
                Create New Task
                </Typography>

              <form 
              onSubmit = {this.handleSubmit}
              className={classes.formWrapper}
              >
            <div>
            <div className={classes.fieldWrappers}>
            <div>
                <TextField
                name="activity"
                label="Activities"
                error={this.state.start_dateError === true ? "error" : null}
                value={this.state.activity}
                onChange={this.handleChange}
                className={classes.Fields001}
                variant="outlined"
                focused={true}
                margin="dense"
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                 select
                InputProps={{
                    className: classes.fieldSizes
                }}
                >
                 {activityID.map(option => (
                <MenuItem 
                    key={option.value} 
                    value={option.value}
                    >
                    {option.label}
                </MenuItem>
                ))}
                </TextField>
        {this.state.start_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}
            </div>
            <div>
            <TextField
                name="supervisor"
                label="Supervisors"
                error={this.state.end_dateError === true ? "error" : null}
                value={this.state.supervisor}
                onChange={this.handleChange}
                className={classes.Fields001}
                variant="outlined"
                focused={true}
                margin="dense"
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                select
                InputProps={{
                    className: classes.fieldSizes
                }}
                >
                 {supervisorsID.map(option => (
                <MenuItem 
                    key={option.value} 
                    value={option.value}
                    >
                    {option.label}
                </MenuItem>
                ))}
                </TextField>
        {this.state.start_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}
            </div>
            </div>
            <div className={classes.fieldWrappers}>
            <div>
            <TextField
                name="basin"
                label="Basins"
                error={this.state.end_dateError === true ? "error" : null}
                value={this.state.basin}
                onChange={this.handleChange}
                className={classes.Fields1}
                variant="outlined"
                focused={true}
                margin="dense"
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                 select
                InputProps={{
                    className: classes.fieldSizes
                }}
                >
                 {basinID.map(option => (
                <MenuItem 
                    key={option.value} 
                    value={option.value}
                    >
                    {option.label}
                </MenuItem>
                ))}
                </TextField>
         {this.state.end_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}
            </div>

            <div>
                <TextField
                name="crop"
                label="Crops"
                error={this.state.start_dateError === true ? "error" : null}
                value={this.state.crop}
                onChange={this.handleChange}
                className={classes.Fields}
                variant="outlined"
                focused={true}
                margin="dense"
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                 select
                InputProps={{
                    className: classes.fieldSizes
                }}
                >
                 {cropID.map(option => (
                <MenuItem 
                    key={option.value} 
                    value={option.value}
                    >
                    {option.label}
                </MenuItem>
                ))}
                </TextField>
        {this.state.start_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
            <div>
            <TextField
                name="stage"
                label="Stages"
                error={this.state.end_dateError === true ? "error" : null}
                value={this.state.stage}
                onChange={this.handleChange}
                className={classes.Fields1}
                variant="outlined"
                focused={true}
                margin="dense"
                SelectProps={{
                MenuProps: {
                    className: classes.menu,
                },
                }}
                 select
                InputProps={{
                    className: classes.fieldSizes
                }}
                >
                 {stageID.map(option => (
                <MenuItem 
                    key={option.value} 
                    value={option.value}
                    >
                    {option.label}
                </MenuItem>
                ))}
                </TextField>
         {this.state.end_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}
            </div>
            </div>
            <div className={classes.fieldWrappers}>
            <div>
            <TextField
                name="location"
                label="Location"
                error={this.state.end_dateError === true ? "error" : null}
                value={this.state.location}
                onChange={this.handleChange}
                className={classes.Fields1}
                variant="outlined"
                margin="dense"
                InputProps={{
                    className: classes.fieldSizes
                }}
                />
         {this.state.end_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
            <div>
                <TextField
                name="startdate"
                label="Start Date"
                error={this.state.start_dateError === true ? "error" : null}
                type="date"
                defaultValue={new Date().getFullYear()}
                value={this.state.startdate}
                onChange={this.handleChange}
                className={classes.Fields}
                variant="outlined"
                focused={true}
                margin="dense"
                InputLabelProps={{
                shrink: true,
                }}
                InputProps={{
                    className: classes.fieldSizes
                }}
                />
        {this.state.start_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
            <div>
            <TextField
                name="enddate"
                label="End Date"
                error={this.state.end_dateError === true ? "error" : null}
                type="date"
                defaultValue={new Date().getFullYear()}
                value={this.state.enddate}
                onChange={this.handleChange}
                className={classes.Fields1}
                variant="outlined"
                focused={true}
                margin="dense"
                InputLabelProps={{
                shrink: true,
                }}
                InputProps={{
                    className: classes.fieldSizes
                }}
                />
         {this.state.end_dateError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

            </div>
            </div>
            <TextField
                name="note"
                label="Note"
                error={this.state.noteError === true ? "error" : null}
                value={this.state.note}
                onChange={this.handleChange}
                className={classes.textFields}
                fullWidth
                rows="2"
                multiline
                margin="dense"
                variant="outlined"/>
        {this.state.noteError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

             <TextField
                name="description"
                error={this.state.description === true ? "error" : null}
                label="Description"
                value={this.state.description}
                onChange={this.handleChange}
                margin="dense"
                rows="3"
                multiline
                variant="outlined"
                className={classes.textFields}
                />
        {this.state.descriptionError === true && <FormHelperText className={classes.FormHelperText} style={{color: 'red'}}>{'this field is required'}</FormHelperText>}

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
const mapDispatchToProps = dispatch =>{
  return{
    addStage : (userData) => dispatch(addStage(userData))
  }
}
export default connect(null, mapDispatchToProps) (withStyles(ActionsStyles, { withTheme: true })(AddSchedule));