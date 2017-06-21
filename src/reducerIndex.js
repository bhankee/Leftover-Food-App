import {combineReducers} from 'redux';
import recipeReducer from './reducer-recipe';
import activeRecipeReducer from './reducer-active-recipe';

const allReducers = combineReducers({
    recipe: recipeReducer,
    activeRecipe: activeRecipeReducer
})

export default allReducers;
