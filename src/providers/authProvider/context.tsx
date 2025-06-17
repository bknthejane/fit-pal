import { createContext } from 'react';

export interface IUser {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    role?: string;
    contactNumber?: string;
    planType?: string;
    activeState?: boolean;
    trial?: boolean;
    policiesAccepted?: string;
}

export interface IAuthStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    user?: IUser;
}

export interface IAuthActionContext {
    loginUser: (login: IUser) => void;
    registerUser: (register: IUser) => void;
}

export const INITIAL_STATE: IAuthStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);
export const AuthActionContext = createContext<IAuthActionContext>(undefined!);