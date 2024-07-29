import { SEARCH_PRODUCTS } from "../types/ActionTypes"

export const sendSearchProducts = (products) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: products,
    }
}