import React, { Component } from 'react';
import {updateBreadcrumb} from '../../actions/breadcrumbAction'
import { connect } from 'react-redux';
import AddItem from '../AddItem';



class Dashboard extends  Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
    }
    componentDidMount =()=> {
        this.dispatch(updateBreadcrumb({parent:"General", child:"Dashboard"}))
    }
    
    render () {
        
        
      
        return (
            <div>
                 <p>Dashboard</p>
                <AddItem outlined/>
                <p>Dashboard</p>
            </div>
        )
    }
}

export default connect()(Dashboard)