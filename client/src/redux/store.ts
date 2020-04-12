import {applyMiddleware, combineReducers, createStore} from "redux";



let reducers = combineReducers({

});






let store = createStore(reducers, applyMiddleware());

export default store;
