import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import AddNotification from './AddNotification';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {updateBreadcrumb} from '../../../actions/breadcrumbAction'
import {connect} from 'react-redux'
import { getNotificationStarted, getNotificationSuccess, getNotificationError } from "../../../actions/getNotification.action";
import axios from 'axios';


const Styles = theme => ({
  root: {
    paddingTop: 50,
    marginLeft: 200,
    marginRight: 200,
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

class Notification extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch
    this.state = {
      rowsPerPage: 5,
      datum: []
    }
}
componentDidMount =()=> {
    this.dispatch(updateBreadcrumb({parent: "Dashboard", child:"Notification"}))
    this.dispatch (getNotificationStarted())
    axios.get( 'https://bhfarmers.herokuapp.com/notifications')
    .then(data => {
       this.dispatch(getNotificationSuccess())
      this.setState({
        datum: data.data['notifications']
      })
      console.log(this.state.datum,'noti')
    }).catch(error => {
      console.log(error)
      this.dispatch(getNotificationError(error))
      
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
  const columns = [{name: "sn", label: "S/N"},{name: 'title', label: "Title"},{name: "description", label: "Description"},{name: "date", label: "Date"}];
  const {datum} = this.state
  let data = []
  let i = 0
          if(datum !== null)
         datum.map((row) => {
        data.push({
          sn: i = i + 1,
          title: row.title,
          description: row.description,
          date: row.datecreated

        
        })
        console.log(row,'row')
    })

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
          noMatch: "Sorry, no records found",
      },
    },
    customToolbar: () => {
        return (
          <AddNotification/>
        );
      },
  };

  const {classes} = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={this.getMuiTheme()}>
      <MUIDataTable 
      title={"Notification List"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </MuiThemeProvider>
    </div>
  );
}
}
export default connect()(withStyles(Styles, { withTheme: true })(Notification));