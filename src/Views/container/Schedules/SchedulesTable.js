import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import AddSchedule from './AddSchedule';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {updateBreadcrumb} from '../../../actions/breadcrumbAction'
import { getScheduleRequest, getScheduleSuccess, getCompleteScheduleError } from "../../../actions/getSchedule.action";
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid';

const Styles = theme => ({
  root: {
    paddingTop: 50,
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

class ScheduleTable extends Component {
    

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch
    this.state = {
      rowsPerPage : 5,
      datum: {}
    }
}
componentDidMount =()=> {
    this.dispatch(updateBreadcrumb({parent: "Dashboard", child:"Schedule"}))
    this.dispatch (getScheduleRequest())
    axios.get( 'https://bhfarmers.herokuapp.com/tasks/init')
    .then(data => {
       this.dispatch(getScheduleSuccess())
      this.setState({
        datum: data.data,
      })
      console.log(this.state.datum,'adding array')
    }).catch(error => {
      console.log(error)
      this.dispatch(getCompleteScheduleError(error))
      
    })
}

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableHeadCell: {
                root: {
                  backgroundColor: "#008542",
                  fontWeight: 500,
                  textAlign: 'center',
      
                  '&:nth-child(1)': {
                    width: 2,
                  },
                  // '&:nth-child(6)': {
                  //     width: 2,
                  // }
                }
              }, 
          MUIDataTableToolbar: {
            root: {
              backgroundColor: "#008542",
            },
            titleText: {
                color:"white",
            },
            icon :{
              color:"white",
              '&:hover': {
                backgroundColor: "white",
                color: '#008542'
              }
            },
            iconActive: {
              color:"white",
            },
          },
        }
        
      })

render(){
  const columns = [{name: "sn", label: "S/N"},
  {name: "supervisor", label: "Supervisor Name"},
  {name: 'activity', label: "Activity Name"},
  {name: "basin", label: "Basin Name"},
  {name: "crop", label: "Crop Name"},
  {name: "stage", label: "Stage Name"},
  ]
  
  const {datum} = this.state
  console.log(datum.tasks, "supervisors names")

  let i = 0
  let data = datum.tasks && datum.tasks.constructor === Array ? datum.tasks.map((row) => {
            return{
          sn: i = i + 1,
          supervisor: row.supervisorname,
          activity: row.supervisorid,
          // basin : "",
          // crop: "",
          // stage : ""
        } }) : []
    console.log(data, "this is what is rendered")  
    
  const options = {
    filterType: 'checkbox',
    viewColumns: false,
    selectableRows: 'none',
    rowsPerPageOptions: [5,10,15,20],
    rowsPerPage: this.state.rowsPerPage,
    responsive: 'scroll',
    filter: false,
    textLabels: {
        body: {
          noMatch: "Loading...",
      },
    },
    customToolbar: () => {
        return (
          <AddSchedule datum={this.state.datum}/>
        );
      },
  };


  const {classes} = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={this.getMuiTheme()}>
      <MUIDataTable 
      title={"Schedule List"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </MuiThemeProvider>
    </div>
  );
}
}
export default connect()(withStyles(Styles, { withTheme: true })(ScheduleTable));