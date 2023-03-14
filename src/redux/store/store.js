import { combineReducers, applyMiddleware, legacy_createStore } from "redux";

import { homeReducer } from "../features/home/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  
  homeReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
