import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './components/Spinner';
import store from './routes/store';
import { persistStore } from 'redux-persist';
import axios from 'axios'
//  ReactDOM.render(<App  />, document.getElementById('root'));
let spinner = <Spinner/>
const persistor = persistStore(store)
const app = document.getElementById('root');
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
const token = sessionStorage.getItem('token')
if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}else{
  delete axios.defaults.headers.common['Authorization'];
}
axios.interceptors.request.use(request => {
  console.log(request)
  return request;
}, error => {
  console.log(error)
 return Promise.reject(error)
})
serviceWorker.unregister();

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={spinner} persistor={persistor}>
      <App/>
    </PersistGate>
    </Provider>,
    app,
  );
  
