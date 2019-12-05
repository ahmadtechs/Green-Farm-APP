import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { styles } from '../../styles/scss/style';
import Media from "react-media";
import { connect } from 'react-redux'
import {
  List, ListItem, ListItemIcon, ListItemText,MenuIcon,classNames,CssBaseline,Drawer, IconButton, ExpandMore, ExpandLess, NotesIcon, DashboardIcon
} from '../../mui';
import { Collapse} from '@material-ui/core'
import { Colors } from '../../styles/themes';




const Spinner = <Loader type="Puff" color="#f4f4f4"
  height="40"
  width="40" />


class DefaultSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoad: false,
      open: false,
      BusinessName: '',
      isMobile: '',
      sidebarFixed: true,
      openNest: '',
      prevNest: '',
      anchorEl: null,
      companySwitchHover: false,
    };

  }
  
  

  handleToggleDrawer =() =>{
    this.setState({open:!this.state.open});
  }
    



  componentDidMount = async () => {
    
  }

  toggleHover() {
    this.setState(previousState => {
      return { companySwitchHover: !previousState.companySwitchHover };
    });
  }

  fixSidebar = () => {
    this.setState({ sidebarFixed: !this.state.sidebarFixed })
    this.props.fixSidebar();
  }
  handleChangeBusinessName = (id) => {
    this.setState({ anchorEl: !this.state.anchorEl },
      () => this.props.fetchUserData(id))
  }
  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlMouseLeave = (e) => { e.target.color = Colors.grey }
  handleClick = (item, index) => {
    if (item.children) {
      this.state.openNest === index ?
        this.setState({ openNest: '' }) :
        this.setState({ openNest: index })
    } else {
      this.props.history.push(item.link);
    }
  }

  onMouseLeave = () => {
    this.setState((prevState) => ({
      openNest: '',
      prevNest: prevState.openNest
    }));
    this.props.handleDrawerClose();
  }

  onMouseEnter = () => {
    this.setState(prevState => ({ openNest: prevState.prevNest }));
    this.props.handleDrawerOpen();
  }

  

  render() {
    const { classes, open, location,  isLoading,dataError, dataErrorMessage } = this.props;
    const { sidebarFixed, openNest, } = this.state
 
  
    const menuList = [
          {name : "Dashboard", icon : <DashboardIcon />, link: "/"},
          { name: "ACTIVITY", icon: <DashboardIcon />, link: "/activity" },
          { name: "BASIN", icon: <DashboardIcon />, link: "/basin" },
          { name: "CROP", icon: <DashboardIcon />, link: "/crop" },
          { name: "SCHEDULE", icon: <DashboardIcon />, link: "/schedule" },
          { name: "STAGE", icon: <DashboardIcon />, link: "/stage" },
          { name: "NOTIFICATION", icon: <DashboardIcon />, link: "/notification" },
          { name: "CREATE USER", icon: <DashboardIcon />, link: "/user" }
    ];

    
    
    return (
      
      <div className={classes.root}>
        <div>
          
        </div>
        <Media query="(max-width: 992px)" onChange={matches => this.setState({ isMobile: matches })} />
        
        <CssBaseline />
        
         
        <Drawer
        
          anchor="left"
          open={open}
          onMouseEnter={!sidebarFixed &&  this.onMouseEnter}
          onMouseLeave={!sidebarFixed && this.onMouseLeave}
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.drawerToggle}>
          
            <IconButton onClick={this.fixSidebar} style={{ color: "#fff", position: "absolute", right: 0 }}>
              {sidebarFixed ? <NotesIcon color="inherit" /> : <MenuIcon color="inherit" />}
            </IconButton>
          </div>

          <List >
            {!isLoading ? menuList.map((item, index) => {
                return (
                  <>
                    <ListItem button className="sidebarBtn" style={{ '&:focus': { outline: "none" } }} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link} key={item.name} >
                      <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />
                      {item.children && open && <ListItemIcon className={classes.nestedIcon}>{openNest === index ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>}
                    </ListItem>
                    <Collapse in={openNest === index} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {
                          item.children && item.children.map((item, index) => (
                            <ListItem button className={classes.nested} onClick={() => this.handleClick(item, index)} selected={location.pathname === item.link}  >
                              <ListItemIcon style={{ color: "#fff", margin: 0 }}>{item.icon}</ListItemIcon>
                              {<ListItemText primary={item.name} classes={{ primary: classes.sidebarText }} />}
                            </ListItem>
                          ))
                        }
                      </List>
                    </Collapse>
                  </>
                )
            }) : <div className={classes.sideBarLoader}>{Spinner}</div>}
            
            
          </List>
        </Drawer>
      </div>
      
    );
  }

}
const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    
  }
}


DefaultSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles, { withTheme: true })(DefaultSidebar)));