import React, { Component } from 'react'
import { SettingsIcon } from '../../mui';
import { Colors } from '../../styles/themes';
import { withStyles } from '@material-ui/core';
import { styles } from '../../styles/callout.styles';
import UsersIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux'
import {
   Button, Icon,  Menu, MenuItem, Divider
} from '../../mui';
class CallOut extends Component {
state={
    anchorEl: null,
}

    CalloutOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
      };

  render() {
      const {classes} = this.props;
      const {  anchorEl } = this.state
    return (
      <div className={classes.callout}>
         <Button  onClick={this.CalloutOpen} color="inherit" className={classes.callOutButton}>
           <SettingsIcon/>
        </Button>
        
        <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  transformOrigin={{ vertical: "top"}}
                  open={Boolean(anchorEl)}
                  onClose={() => this.setState({ anchorEl: null })}
                  style={{ marginTop: -30 }} classes={{ paper: classes.menu }}
                  
                >
                  <MenuItem  onClick={()=>this.setState({anchorEl:!anchorEl})}  onMouseEnter={(e) => e.target.style.color =Colors.blueSecondary} 
                  onMouseLeave={(e)=>e.target.style.color =Colors.grey}>Delete</MenuItem>
                <Divider />
                <MenuItem   onMouseEnter={(e) => e.target.style.color =Colors.blueSecondary} 
                  onMouseLeave={(e)=>e.target.style.color =Colors.grey}>Suspend</MenuItem>
                </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(CallOut)


