import React, { Component } from 'react';
import { Button } from '../../mui';
import Dashboard from './Dashboard';
import {updateBreadcrumb} from '../../actions/breadcrumbAction'
import { getScheduleRequest, getScheduleSuccess, getCompleteScheduleError } from "../../actions/getSchedule.action";
import { connect } from 'react-redux';
import {Chart} from 'primereact/chart';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const Styles = theme => ({
  root: {
    padding: '10%',
    // marginLeft: '10%',
    // marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
  charts:{
    width: '70%',
    height: '50%',
  }
});

class DasboardContainer extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch
    this.state = {
      datum: {}
    }
}
  componentDidMount =()=> {
    this.dispatch(updateBreadcrumb({parent:"General", child:"Dashboard"}))
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

    render() {
      const stackedData = {
        labels: ['Activity', 'Task', 'Basin', 'Crop', 'Stage'],
        datasets: [{
        type: 'bar',
                label: 'Activities',
                backgroundColor: '#66BB6A',
        data: [50,25,12,48, 39]
        }, 
        {
        type: 'bar',
        label: 'Tasks',
        backgroundColor: '#FFCA28',
        data: [90,76,42,21,84]
        }, 
        {
        type: 'bar', 
        label: 'Basins',
        backgroundColor: '#A4D10F',
        data: [24,74,23,21,32]
        },
        {
          type: 'bar', 
          label: 'Crops',
          backgroundColor: '#32AF89',
          data: [41,52,24,74,23]
        },
        {
          type: 'bar', 
          label: 'Stages',
          backgroundColor: '#4FAF32',
          data: [52,24,74,23,21]
          }
        ]};

        const stackedOptions = {
          tooltips: { mode: 'index',intersect: false },
          responsive: true,
          scales: { xAxes: [{stacked: true,}],
                  yAxes: [{stacked: true}]
          }
        };

        const {datum} = this.state
        console.log(datum.tasks, "supervisors names")

        const {classes} = this.props;

        return (
         <div className={classes.root}>
          <div className={classes.charts}>
              <div className="content-section implementation">
                <h3>Schedule Chart</h3>
                <Chart type="bar" data={stackedData} options={stackedOptions} />
              </div>
          </div>
      </div>
    )
  }
}

export default connect()(withStyles(Styles, { withTheme: true })(DasboardContainer))

