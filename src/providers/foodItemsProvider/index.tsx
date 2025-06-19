'use client';

import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, FoodActionContext, FoodStateContext, IFood } from "./context";
import { FoodReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
    getFoodsPending,
    getFoodsSuccess,
    getFoodsError,
    createFoodPending,
    createFoodSuccess,
    createFoodError
} from './actions';

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);
    const instance = axiosInstance();

    const getFoods = async () => {
        dispatch(getFoodsPending());
        const getFoodsEndpoint = `food`;
        console.log(getFoodsEndpoint);

        await instance.get(getFoodsEndpoint)
        .then((response) => {
            dispatch(getFoodsSuccess(response.data.data));
            console.log(response.data.data);
        })
        .catch((error) => {
            console.error(error);
            dispatch(getFoodsError());
        })
    }

    

    const createFood = async (food: IFood) => {
        dispatch(createFoodPending());
        const createFoodEndpoint = `food`;

        await instance.post(createFoodEndpoint, food)
        .then((response) => {
            dispatch(createFoodSuccess(response.data.data));
            console.log(response.data.data)
        })
        .catch((error) => {
            console.log(error);
            dispatch(createFoodError());
        })
    }

    return (
        <FoodStateContext.Provider value={state}>
            <FoodActionContext.Provider value={{ getFoods, createFood }}>
                {children}
            </FoodActionContext.Provider>
        </FoodStateContext.Provider>
    )
}

export const useFoodState = () => {
    const context = useContext(FoodStateContext);
    if (!context) {
        throw new Error('useFoodState must be used within a FoodProvider');
    }

    return context;
}

export const useFoodActions = () => {
    const context = useContext(FoodActionContext);
    if (!context) {
        throw new Error('useFoodActions must be used within FoodProvider');
    }

    return context;
}