import {combineReducers} from 'redux';
import recipeReducer from './reducer-recipe';
import ActiverecipeReducer from './reducer-active-recipe';

const allReducers = combineReducers({
    recipe: recipeReducer,
    activeRecipe: ActiverecipeReducer
})

export default allReducers;
