import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import authreducer from "./auth/authreducer"
import productReducer from "./prod/productReducer"

const combinedreducer=combineReducers({
    authred:authreducer,
    productReducer:productReducer
})
const store=createStore(combinedreducer,applyMiddleware(thunk))
export default store;