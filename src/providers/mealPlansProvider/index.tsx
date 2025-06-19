'use client';

import { axiosInstance } from "@/utils/axiosInstance";
import { INITIAL_STATE, MealPlanActionContext, MealPlanStateContext, IMealPlan } from "./context";
import { MealPlanReducer } from "./reducer";
import { useContext, useReducer } from 'react';
import {
    getTrainerMealPlansPending,
    getTrainerMealPlansSuccess,
    getTrainerMealPlansError,
    getClientMealPlansPending,
    getClientMealPlansSuccess,
    getClientMealPlansError,
    getMealPlanPending,
    getMealPlanSuccess,
    getMealPlanError,
    createMealPlanPending,
    createMealPlanSuccess,
    createMealPlanError
} from './actions';


export const MealPlanProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(MealPlanReducer, INITIAL_STATE);
    const instance = axiosInstance();

    const getTrainerMealPlans = async (trainerId: string) => {
        dispatch(getTrainerMealPlansPending());
        const endpoint = `mealplans/${trainerId}`;

        await instance.get(endpoint)
        .then((response) => {
            dispatch(getTrainerMealPlansSuccess(response.data.data.data))
        })
        .catch((error) => {
            console.error(error);
            dispatch(getTrainerMealPlansError());
        })
    }

    const getClientMealPlans = async (clientId: string) => {
        dispatch(getClientMealPlansPending());
        const endpoint = `mealplan/client/${clientId}`;

        await instance.get(endpoint)
        .then((response) => {
            dispatch(getClientMealPlansSuccess(response.data.data.data))
        })
        .catch((error) => {
            console.error(error);
            dispatch(getClientMealPlansError());
        })
    }

    const getMealPlan = async (id : string) => {
        dispatch(getMealPlanPending());
        const endpoint = `mealplan/${id}`;

        await instance.get(endpoint)
        .then((response) => {
            dispatch(getMealPlanSuccess(response.data.data))
        })
        .catch((error) => {
            console.error(error);
            dispatch(getMealPlanError());
        })
    }

    const createMealPlan = async (trainerId: IMealPlan) => {
        dispatch(createMealPlanPending());
        const endpoint = `mealplan`;

        await instance.post(endpoint, trainerId)
        .then((response) => {
            dispatch(createMealPlanSuccess(response.data.data));
            console.log(response.data.data);
        })
        .catch((error) => {
            console.error(error);
            dispatch(createMealPlanError());
        })
    }

    return (
        <MealPlanStateContext.Provider value={state}>
            <MealPlanActionContext.Provider value={{ getTrainerMealPlans, getClientMealPlans,getMealPlan,createMealPlan}}>
                {children}
            </MealPlanActionContext.Provider>
        </MealPlanStateContext.Provider>
    )
}

export const useMealPlanState = () => {
    const context = useContext(MealPlanStateContext);
    if (!context) {
        throw new Error('useMealPlanState must be used within a MealPlanProvider');
    }

    return context;
}

export const useMealPlanActions = () => {
    const context = useContext(MealPlanActionContext);
    if (!context) {
        throw new Error('useMealPlanActions must be used within MealPlanProvider')
    }

    return context;
}