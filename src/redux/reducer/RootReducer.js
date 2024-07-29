import { combineReducers } from "redux";
import SearchProductReducer from "./SearchReducer";

const rootReducer = combineReducers({
    searchState: SearchProductReducer,
});

export default rootReducer;