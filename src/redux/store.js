import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import authreducer from "./auth/authreducer"

const combinedreducer=combineReducers({
    authred:authreducer
})
const store=createStore(combinedreducer,applyMiddleware(thunk))
export default store;