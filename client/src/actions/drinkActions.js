import drinkApi from '../api/drinkApi';

import * as types from './actionTypes';

export function loadDrinksSuccess(drinks) {
  return {type: types.LOAD_DRINKS_SUCCESS, drinks};
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