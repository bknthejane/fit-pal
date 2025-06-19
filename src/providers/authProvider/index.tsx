'use client';

import React, { useContext, useReducer } from 'react';
import { AuthReducer } from './reducer';
import { INITIAL_STATE, IUser, AuthActionContext, AuthStateContext } from './context';
import { loginUserPending, loginUserSuccess, loginUserError, registerUserPending, registerUserSuccess, registerUserError } from './actions';
import { axiosInstance } from '@/utils/axiosInstance';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const instance = axiosInstance();
    const router = useRouter();

    interface IToken {
        id: string;
        name: string;
        role: string;

    }

    const loginUser = async (user: IUser) => {
        dispatch(loginUserPending());

        const loginEndpoint = 'users/login';

        await instance.post(loginEndpoint, user)
            .then(async (response) => {
                dispatch(loginUserSuccess(response.data));
                sessionStorage.setItem('token', response.data.data.token);
                const token = jwtDecode<IToken>(JSON.stringify(response.data.data.token));

                sessionStorage.setItem('userRole', token.role)
                sessionStorage.setItem('userId', token.id)
                sessionStorage.setItem('name', token.name)

                const role = sessionStorage.getItem('userRole');
                if (role === 'admin') {
                    router.push('/trainer');
                } else {
                    router.push('/client/dashboard');
                }
            })
            .catch(error => {
                console.log(error.message)
                dispatch(loginUserError())
            })
    }

    const registerUser = async (user: IUser) => {
        dispatch(registerUserPending());

        const registerEndpoint = 'users/register';

        await instance.post(registerEndpoint, user)
            .then((response) => {
                dispatch(registerUserSuccess(response.data))
            })
            .catch((error => {
                console.log(error.response)
                dispatch(registerUserError())
                console.log(error.message)
            }))
    }

    return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{ loginUser, registerUser }}>
                {children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    )
}

export const useUserState = () => {
    const context = useContext(AuthStateContext);
    if (!context) {
        throw new Error('useUserState must be used within a UserProvider');
    }
    return context;
}

export const useUserActions = () => {
    const context = useContext(AuthActionContext);
    if (!context) {
        throw new Error('useUserState must be used within a UserProvider')
    }
    return context;
}