export default function (state = null, action){
    switch(action.type) {
        case "FOOD_INPUT":
            return action.payload;
            break;
    }
    return state;

}
