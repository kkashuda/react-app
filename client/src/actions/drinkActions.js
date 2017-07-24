import * as types from './actionTypes';
import drinkApi from '../api/drinkApi';


export function loadDrinksSuccess(drinks) {
  return {type: types.LOAD_DRINKS_SUCCESS, drinks};
}

export function createDrinkSuccess(drink) {
  return {type: types.CREATE_DRINK_SUCCESS, drink}
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

export function createDrink(drink) {
  return function (dispatch) {
    return drinkApi.createDrink(drink).then(drink => {
      dispatch(createDrinkSuccess(drink));
      return drink;
    }).catch(error => {
      throw(error);
    });
  };
}
