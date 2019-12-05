import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import {connect} from 'react-redux'
import AddActivity from './Add_Activity';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {updateBreadcrumb} from '../../../actions/breadcrumbAction'
import {getActivity} from '../../../helpers/getActivity.helper'
import { getActivitiesRequest, getActivitiesSuccess, getCompleteActivitiesError } from "../../../actions/getActivity.action";

import axios from 'axios';


const Styles = theme => ({
  root: {
   paddingTop: 50,
   marginLeft: 300,
   marginRight: 300,
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

class ActivityTable extends Component {
    
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch
    this.state = {
      rowsPerPage: 5,
      datum: []
    }
}
componentDidMount =()=> {
    this.dispatch(updateBreadcrumb({parent: "Dashboard", child:"Activity"}))
    this.dispatch (getActivitiesRequest())
    setTimeout(()=>{
    axios.get( 'https://bhfarmers.herokuapp.com/activities' )
    .then(data => {
       this.dispatch(getActivitiesSuccess())
      this.setState({
        datum: data.data['activities']
      })
      console.log(data.data['activities'],'get activity')
    }).catch(error => {
      console.log(error)
      this.dispatch(getCompleteActivitiesError(error))
    })
  },100)
}

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableHeadCell: {
                root: {
                  backgroundColor: "#008542",
                  fontWeight: 700,
                  textAlign: 'center',
      
                  '&:nth-child(1)': {
                    width: 2
                  },
                  '&:nth-child(3)': {
                      width: '25%',
                  }
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
  const columns = [{name: "sn", label: "S/N"},{name: 'name', label: "Name"},{name: 'date', label: "Date Created"}];
  const {datum} = this.state
  console.log(datum,'datum')
  let data = []
  let i = 0
          if(datum !== null)
         datum.map((row) => {
        data.push({
          sn: i = i + 1,
          name: row.name,
          date: row.datecreated

        
        })
        console.log(row,'row')
    })

  const options = {
    responsive: "scroll",
    filterType: 'checkbox',
    viewColumns: false,
    selectableRows: 'none',
    rowsPerPageOptions: [5,10,15,20],
    rowsPerPage: this.state.rowsPerPage,
    // responsive: 'scroll',
    filter: false,
    textLabels: {
        body: {
          noMatch: "Loading...",
      },
    },
    customToolbar: () => {
        return (
          <AddActivity/>
        );
      },
  };

  const {classes} = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={this.getMuiTheme()}>
      <MUIDataTable 
      title={"Activity List"} 
      data={data}
      columns={columns} 
      options={options} 
      />
    </MuiThemeProvider>
    </div>
  );
}
}


export default connect()(withStyles(Styles, { withTheme: true })(ActivityTable));