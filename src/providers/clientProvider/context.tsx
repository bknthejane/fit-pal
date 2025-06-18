import { createContext } from 'react';

export interface IClient {
    id?: string,
    fullName: string,
    email: string,
    contactNumber: string,
    sex?: string,
    dateOfBirth?: string,
    activeState?: boolean,
    trainerId?: string,
}

export interface IClientStateContext {
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
    client?: IClient,
    clients?: IClient[]
}

export interface IClientActionContext {
    getClients: () => void;
    getClient: (id: string) => void;
    createClient: (client: IClient) => void;

}

export const INITIAL_STATE: IClientStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const ClientStateContext = createContext<IClientStateContext>(INITIAL_STATE);

export const ClientActionContext = createContext<IClientActionContext>(undefined!);