import {setCookie, deleteCookie, getCookie} from "../utils/cookie";
import {AppActions, AuthActionTypes, AuthInitialState, SetUserDataAction, SET_USER_DATA} from "../types/AuthTypes";
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
    userType: ''
};

const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        /*
    case SET_MESSAGE:
        return {
            ...state,
            message: action.message
        }
    case SET_ERROR:
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

const setUserData = (userEmail,token,userAvatar,userId,userName,surname,name,userType): SetUserDataAction => ({ type: SET_USER_DATA, payload: {
        userEmail,
        token,
        userAvatar,
        userId,
        userName,
        surname,
        name,
        userType
    }})


export const login = (login: string, password: string) => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        let response = await authAPI.login(login, password)
        const {userEmail,token,userAvatar,userId,userName,surname,name,userType} = response
        dispatch(setUserData(userEmail,token,userAvatar,userId,userName,surname,name,userType))
        console.log(response)
    };
};



export default authReducer;
