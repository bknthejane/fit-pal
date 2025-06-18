import { createAction } from "redux-actions";
import { IClient, IClientStateContext } from "./context";

export enum ClientActionEnums {
    getClientsPending = 'GET_CLIENTS_PENDING',
    getClientsSuccess = 'GET_CLIENTS_SUCCESS',
    getClientsError = 'GET_CLIENTS_ERROR',

    getClientPending = 'GET_CLIENT_PENDING',
    getClientSuccess = 'GET_CLIENT_SUCCESS',
    getClientError = 'GET_CLIENT_ERROR',

    createClientPending = "CREATE_CLIENT_PENDING",
    createClientSuccess = "CREATE_CLIENT_SUCCESS",
    createClientError = "CREATE_CLIENT_ERROR",

}

export const getClientsPending = createAction<IClientStateContext>(
    ClientActionEnums.getClientsPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const getClientsSuccess = createAction<IClientStateContext, IClient[]>(
    ClientActionEnums.getClientsSuccess, (clients: IClient[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        clients,
    })
)

export const getClientsError = createAction<IClientStateContext>(
    ClientActionEnums.getClientsError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    })
)

export const getClientPending = createAction<IClientStateContext>(
    ClientActionEnums.getClientPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
)

export const getClientSuccess = createAction<IClientStateContext, IClient>(
    ClientActionEnums.getClientSuccess, (client: IClient) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        client,
    })
)

export const getClientError = createAction<IClientStateContext>(
    ClientActionEnums.getClientError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)

export const createClientPending = createAction<IClientStateContext>(
    ClientActionEnums.createClientPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    })
)

export const createClientSuccess = createAction<IClientStateContext, IClient>(
    ClientActionEnums.createClientSuccess, (client: IClient) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        client,
    })
)

export const createClientError = createAction<IClientStateContext>(
    ClientActionEnums.createClientError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)
