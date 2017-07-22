import React from 'react';  
import { Route, IndexRoute } from 'react-router'; 
import App from './components/App';  
import DrinksPage from './components/drinks/DrinksPage';
import HomePage from './components/home/HomePage';


export default (  
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/drinks" component={DrinksPage}>
    </Route>
  </Route>
);

