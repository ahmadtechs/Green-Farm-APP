import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import AddCrop from './AddCrops';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {updateBreadcrumb} from '../../../actions/breadcrumbAction'
import {connect} from 'react-redux'
import { getCropRequest, getCropSuccess, getCropError } from "../../../actions/getCrop.action";
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

class CropsTable extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch
    this.state = {
      rowsPerPage : 5,
      datum: []
    }
}
componentDidMount =()=> {
    this.dispatch(updateBreadcrumb({parent: "Dashboard", child:"Crop"}))
    this.dispatch (getCropRequest())
    axios.get( 'https://bhfarmers.herokuapp.com/crops')
    .then(data => {
       this.dispatch(getCropSuccess())
      this.setState({
        datum: data.data['crops']
      })
      console.log(data.data['crops'],'crops')
    }).catch(error => {
      console.log(error)
      this.dispatch(getCropError(error))
      
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
  const columns = [{name: "sn", label: "S/N"},{name: 'name', label: "Name"},{name: "type", label: "Type"},{name: 'date', label: "Date"}];
  const {datum} = this.state
  let data = []
  let i = 0
          if(datum !== null)
         datum.map((row) => {
        data.push({
          sn: i = i + 1,
          name: row.name,
          type: row.type,
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
          noMatch: "Loading...",
      },
    },
    customToolbar: () => {
        return (
          <AddCrop/>
        );
      },
  };

  const {classes} = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={this.getMuiTheme()}>
      <MUIDataTable 
      title={"Crops List"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </MuiThemeProvider>
    </div>
  );
}
}
export default connect()(withStyles(Styles, { withTheme: true })(CropsTable));