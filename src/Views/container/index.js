import React, {useState} from 'react'
import Table from './Table'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    heading: {
      marginBottom: theme.spacing(14)
    },
    components:{
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12)
    },
}))

const Index = props =>{

    const classes = useStyles()

     
     return (
        <div>
            <header className={classes.heading}>
            <div className="data-form">
            <AppBar>
            <Toolbar>
                <Typography variant="h6"> Data Form </Typography>
            </Toolbar>
            </AppBar> 
            </div>
            </header>
            <div className={classes.components}>
             <Table/>
            </div>
        </div>
    )
}
export default Index;
