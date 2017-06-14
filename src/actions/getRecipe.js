export const inputFood =(recipe)=> {
    console.log (recipe.dish);

    return {
        type: "FOOD_INPUT",
        payload: recipe
    }

};
