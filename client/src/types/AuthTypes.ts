// action strings
export const SET_USER_DATA = 'market/auth/SET_USER_DATA';
export const LOGOUT = 'market/auth/LOGOUT';

export interface AuthInitialState {
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
    payload: AuthInitialState;
}

export interface LogoutAction {
    type: typeof LOGOUT;
}

export type AuthActionTypes =
    | SetUserDataAction
    | LogoutAction;

export type AppActions = AuthActionTypes;
