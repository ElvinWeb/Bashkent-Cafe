import { SEARCH_PRODUCTS } from "../types/ActionTypes"

const initialState = {
    searchProducts: [],
}

const SearchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return{
                ...state, 
                searchProducts: [...action.payload],
            };
        default:
            return state;
    }
}

export default SearchProductReducer;