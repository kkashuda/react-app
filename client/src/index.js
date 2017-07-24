import 'babel-polyfill'; 
import React from 'react';
import './index.css';
import './index.css';
import App from './components/App'
import { render } from 'react-dom';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';    
import { Router, browserHistory } from 'react-router';  
import routes from './routes';
import {loadDrinks} from './actions/drinkActions';
import 'semantic-ui-css/semantic.css';



const store = configureStore();
store.dispatch(loadDrinks());
render(  
   <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

