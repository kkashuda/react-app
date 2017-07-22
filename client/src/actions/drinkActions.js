import drinkApi from '../api/drinkApi';

export function loadDrinks() {  
  return function(dispatch) {
    return drinkApi.getAlldrinks().then(drinks => {
      dispatch(loadCatsSuccess(drinks));
    }).catch(error => {
      throw(error);
    });
  };
}