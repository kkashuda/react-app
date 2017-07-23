import * as types from './actionTypes';
import drinkApi from '../api/drinkApi';


export function loadDrinksSuccess(drinks) {
  return {type: types.LOAD_DRINKS_SUCCESS, drinks};
}

export function loadDrinkSuccess(drink) {
  return {type: types.LOAD_DRINK_SUCCESS, drink};
}


export function loadDrinks() {  
  return function(dispatch) {
    return drinkApi.getAllDrinks().then(drinks => {
      dispatch(loadDrinksSuccess(drinks));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadDrink() {  
  return function(dispatch) {
    return drinkApi.getDrink().then(drink => {
      dispatch(loadDrinkSuccess(drink));
    }).catch(error => {
      throw(error);
    });
  };
}