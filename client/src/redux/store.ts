import {applyMiddleware, combineReducers, createStore} from "redux";



let reducers = combineReducers({

});


export type AppState = ReturnType<typeof reducers>;

let store = createStore(reducers, applyMiddleware());

export default store;
