import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import { Redirect, Route, Switch, } from 'react-router-dom'
import routes from '../routes'
import { connect } from 'react-redux'
import DefaultSidebar from './DefaultSidebar';
import {DefaultHeader} from './index'
import { classNames, CssBaseline} from '../../mui';
import { styles} from '../../styles/scss/style'
import MainBreadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state= {
            drawerOpen: true,
            sidebarOpen: true,
            sidebarMinimized: true,
            sidebarFixed: true
        }
    }

    componentDidMount () {
        const {isLoggedIn}=this.props.authState
    if (isLoggedIn===false) return this.props.history.push('/auth');
    }
    fixSidebar = () => {
        this.setState({sidebarFixed: !this.state.sidebarFixed})
      }

    handleDrawerOpen = () => {
        this.setState({ drawerOpen: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ drawerOpen: false });
    };

    render () {
        const {classes} = this.props
        const {sidebarOpen, sidebarMinimized, drawerOpen, sidebarFixed} = this.state;

        return (
            <div className={classes.root}>
            <CssBaseline />
            <DefaultSidebar handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} open={drawerOpen} fixSidebar={this.fixSidebar} ></DefaultSidebar>
            <DefaultHeader handleDrawerOpen={this.handleDrawerOpen} open={drawerOpen} sidebarFixed={sidebarFixed}/>
            <Container 
            className={classNames(classes.content, {
                [classes.contentShift]: sidebarFixed,
              })}
//   className={classes.content} 
               fluid>
               <MainBreadcrumbs/>
            <Switch>
            {routes.map((route, idx) => {
                return route.component ? (
                    <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                    )} />
                ) : (null);
            })}
            </Switch>
            </Container>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      authState:state.isAuthenticated,
    }
}

DefaultLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps)(withStyles(styles)(DefaultLayout))