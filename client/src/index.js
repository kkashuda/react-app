import 'babel-polyfill'; 
import React from 'react';
import './index.css';
import 'semantic-ui-css/semantic.css';
import './index.css';
import { render } from 'react-dom';  
import { Router, browserHistory } from 'react-router';  
import routes from './routes';


render(  
 <Router history={browserHistory} routes={routes} />,
 document.getElementById('app')
);

