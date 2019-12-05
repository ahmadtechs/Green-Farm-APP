import React from 'react';
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Icon, MenuIcon, Typography, Avatar, Menu, MenuItem,
        AccountCircle, Divider, ListItemIcon, ListItemText,} from '../../mui';
import { styles} from '../../styles/scss/style';
import Media from "react-media";
import { userLogout } from '../../helpers/authentication.helper';
import { connect } from 'react-redux'
import { Fonts, Colors } from '../../styles/themes';


const Spinner =<Loader type="Watch" color={Colors.blueSecondary} height="20" width="20"/>

class DefaultHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isMobile: '',
          anchorEl: null,
        };
    }

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
      handleLogout = ()=>({

      })
    render () {
      const {classes,userData, sidebarFixed} = this.props
      const { isMobile } = this.state
      const { anchorEl } = this.state;
        return (
            <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: isMobile ? false : sidebarFixed ,
            })}
            >
            <Media query="(max-width: 992px)" onChange={matches => this.setState({isMobile: matches})}/>
            <Toolbar disableGutters={false}>
                
                <div >
                <Typography variant="h6" style={{fontFamily:Fonts.primary}} color="inherit" noWrap>
                {isMobile ? 'B&H' : 'B&H'}
                </Typography>
                </div>
                <div className={classes.grow} />
                <Typography variant="button" color="inherit" style={{float:"right",fontFamily:Fonts.primary, textTransform:"none"}} noWrap>
                </Typography>
                <IconButton
                    aria-owns={anchorEl? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                >
                <Avatar>
                <AccountCircle />
                </Avatar>
                </IconButton> 
                    <Menu
                    id="material-appbar"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{marginTop:35}} classes={{paper:classes.menu}} 
                    >
                    <MenuItem onClick={this.handleClose}><Icon  style={{marginRight:10, color: '#00854D'}} >account_circle_outlined</Icon>Profile</MenuItem>
                    <Divider  />
                    <MenuItem onClick={this.props.userLogout}><Icon style={{color:"#b71c1c", marginRight:10}} >exit_to_app</Icon>Logout</MenuItem>
                    </Menu>

            </Toolbar>
            </AppBar>
        )
    }
}

DefaultHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => {
    return{
      userData: state.isAuthenticated.data,
      isLoading:state.isAuthenticated.isLoadingData,
      dataError:state.isAuthenticated.dataError,
      dataErrorMessage:state.isAuthenticated.dataErrorMessage,

    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout()),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DefaultHeader))
  
