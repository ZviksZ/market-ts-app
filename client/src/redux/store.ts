import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import {AppActions} from "../types/AuthTypes";


let reducers = combineReducers({

});


export type AppState = ReturnType<typeof reducers>;

let store = createStore(reducers, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));

export default store;
