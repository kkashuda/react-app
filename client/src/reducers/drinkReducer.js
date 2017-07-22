import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function drinkReducer(state = initialState.drinks, action) {  
  switch(action.type) {
    case types.LOAD_DRINKS_SUCCESS:
      return action.drinks
    default: 
      return state;
  }
}