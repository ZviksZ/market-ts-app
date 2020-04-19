import {setCookie, deleteCookie, getCookie} from "../utils/cookie";
import {AppActions, AuthActionTypes, AuthInitialState, SetUserDataAction, SET_USER_DATA, SET_AUTH, SetUserDataPayload, SetAuthAction} from "../types/AuthTypes";
import {Dispatch} from "redux";
import {AppState} from "./store";
import {authAPI} from "../api/api";

const initialState: AuthInitialState = {
    userEmail: '',
    token: '',
    userAvatar: '',
    userId: null,
    userName: '',
    surname: '',
    name: '',
    userType: '',
    isAuth: false
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        /*case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_READY:
            return {
                ...state,
                ready: action.ready
            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                userId: null
            }*/
        default:
            return state;
    }
}

const setUserData = (payload: SetUserDataPayload): SetUserDataAction => ({type: SET_USER_DATA, payload: payload})
const setAuthAction = (isAuth: boolean): SetAuthAction => ({type: SET_AUTH, isAuth})

export const login = (login: string, password: string) => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        try {
            let response = await authAPI.login(login, password)
            dispatch(setUserData(response))
            dispatch(setAuthAction(true))
        } catch (e) {

        }

    };
};

export const registerUser = (userName: string, name: string, surname: string, userEmail: string, password: string, avatar: string = '', userType: string = 'User') => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        try {
            await authAPI.register(userName, name, surname, userEmail, password, avatar, userType)
        } catch (e) {

        }
    };
};


export default authReducer;
