import React from 'react';
import './App.css';
import './css/styles.css'
import { createBrowserHistory } from 'history';
import { Switch, Route,Router } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {blue} from './mui';
import { DefaultLayout } from './container/DefaultLayout';
import routeDefinitions from './routes';
import { AuthPage,CompleteSignup } from './routes/Loaders';
export const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      light: '#daa520',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    textPrimary:{
      main:"#daa520"
    }
  }
})
const App = () => {
    const routes = routeDefinitions.map(({
      path,component, title, exact, key,
    }) => {
     
      return (
        <Route
          exact={Boolean(exact)}
          path={path}
          component={component}
          title={title}
          key={key}
        />
      )
    });

    return ( 
      <MuiThemeProvider theme={theme}>
        <Router history={history} >
            <Switch>
            <Route exact path="/auth" name="Login" component={AuthPage} />
            <Route exact path="/auth/signup" name="Register" component={CompleteSignup}/>
            <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </Router>
        </MuiThemeProvider>
    );
}
export default App;
