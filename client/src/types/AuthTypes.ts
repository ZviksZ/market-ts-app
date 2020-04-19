// action strings
export const SET_USER_DATA = 'market/auth/SET_USER_DATA';
export const LOGOUT = 'market/auth/LOGOUT';
export const SET_AUTH = 'market/auth/SET_AUTH';

export interface AuthInitialState {
    token: string;
    userId: string | null;
    userEmail: string;
    userName: string;
    name: string;
    surname: string;
    userType: string;
    userAvatar: string;
    isAuth: boolean;
}


export interface SetUserDataPayload {
    token: string;
    userId: string | null;
    userEmail: string;
    userName: string;
    name: string;
    surname: string;
    userType: string;
    userAvatar: string;
}
export interface SetUserDataAction {
    type: typeof SET_USER_DATA;
    payload: SetUserDataPayload;
}

export interface LogoutAction {
    type: typeof LOGOUT;
}
export interface SetAuthAction {
    type: typeof SET_AUTH;
    isAuth: boolean;
}
export type AuthActionTypes =
    | SetUserDataAction
    | SetAuthAction
    | LogoutAction;

export type AppActions = AuthActionTypes;
