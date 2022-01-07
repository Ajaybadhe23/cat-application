import { combineReducers } from "redux";
import { catListReducer } from "./listReducer";

const rootReducers = combineReducers(
    {
        catListReducer: catListReducer
    }
)
export default rootReducers;