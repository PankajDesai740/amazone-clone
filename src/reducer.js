export const initialState ={
    basket:[],
}

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {state};
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing from basket
            return{state};
            break;
        default:
            return state;
    }
}

export default reducer;