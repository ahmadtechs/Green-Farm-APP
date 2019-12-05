import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import AddBasins from './AddBasins';
import {connect} from 'react-redux'
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {updateBreadcrumb} from '../../../actions/breadcrumbAction'
import { getBasinRequest, getBasinSuccess, getBasinError } from "../../../actions/getBasin.action";


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

class BasinsTable extends Component {
    
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch
    this.state = {
      datum : []
    }
}
componentDidMount =()=> {
    this.dispatch(updateBreadcrumb({parent: "Dashboard", child:"Basin"}))
    this.dispatch (getBasinRequest())
    setTimeout(()=>{
    axios.get( 'https://bhfarmers.herokuapp.com/basins' )
    .then(data => {
       this.dispatch(getBasinSuccess())
      this.setState({
        datum: data.data['basins']
      })
      console.log(this.state.datum,'basins')
    }).catch(error => {
      console.log(error)
      this.dispatch(getBasinError(error))
      
    })
  },100)
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
                  '&:nth-child(6)': {
                      width: 2,
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
    filterType: 'checkbox',
    viewColumns: false,
    selectableRows: 'none',
    responsive: 'scroll',
    filter: false,
    textLabels: {
        body: {
          noMatch: "Loading...",
      },
    },
    customToolbar: () => {
        return (
          <AddBasins/>
        );
      },
  };

  const {classes} = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={this.getMuiTheme()}>
      <MUIDataTable 
      title={"Basins List"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </MuiThemeProvider>
    </div>
  );
}
}
export default connect()(withStyles(Styles, { withTheme: true })(BasinsTable));