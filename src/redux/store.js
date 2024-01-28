import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose

const rootreducer = combineReducers({
    productReducer, authReducer
})
export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))