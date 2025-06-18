'use client';
import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, IClient, ClientActionContext, ClientStateContext } from "./context";
import { ClientReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
    getClientsPending,
    getClientsSuccess,
    getClientsError,
    getClientPending,
    getClientSuccess,
    getClientError,
    createClientPending,
    createClientSuccess,
    createClientError
} from "./actions";
import axios from 'axios';
import { useUserState } from "../authProvider";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(ClientReducer, INITIAL_STATE);
    const instance = axiosInstance();

    const getClients = async () => {


        dispatch(getClientsPending());
        const id = sessionStorage.getItem('userId');
        const getClientsEndpoint = `client/trainer/${id}/clients`;
        console.log(getClientsEndpoint);
    
        await instance.get(getClientsEndpoint)
            .then((response) => {
                dispatch(getClientsSuccess(response.data.data));
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error(error);
                dispatch(getClientsError());
            });
    };

    const getClient = async (id: string) => {
        dispatch(getClientPending())
        const getClientEndpoint = `client/${id}`;

        await axios(getClientEndpoint)
            .then((response) => {
                dispatch(getClientSuccess(response.data))
            })
            .catch((error) => {
                console.error(error);
                dispatch(getClientError());
            })
    }

    const createClient = async (client: IClient) => {
        dispatch(createClientPending());
        const createClientEndpoint = `client`;

        await instance.post(createClientEndpoint, client)
            .then((response) => {
                dispatch(createClientSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(createClientError())
            });
    }


    return (
        <ClientStateContext.Provider value={state}>
            <ClientActionContext.Provider value={{ getClients, getClient, createClient }}>
                {children}
            </ClientActionContext.Provider>
        </ClientStateContext.Provider>
    )
}

export const useClientState = () => {
    const context = useContext(ClientStateContext);
    if (!context) {
        throw new Error('useClientState must be used within a ClientProvider');
    }
    return context;
}

export const useClientActions = () => {
    const context = useContext(ClientActionContext);
    if (!context) {
        throw new Error('useClientActions must be used within a ClientProvider');
    } return context;
}