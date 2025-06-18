import { createAction } from "redux-actions"
import { IMealPlanStateContext, IMealPlan } from "./context"

export enum MealPlanActionEnums {
    getMealPlansPending = "GET_MEALPLANS_PENDING",
    getMealPlansSuccess = "GET_MEALPLANS_SUCCESS",
    getMealPlansError = "GET_MEALPLANS_ERROR",

    getMealPlanPending = "GET_MEALPLAN_PENDING",
    getMealPlanSuccess = "GET_MEALPLAN_SUCCESS",
    getMealPlanError = "GET_MEALPLAN_ERROR",

    getClientMealPlansPending = "GET_CLIENT_MEALPLANS_PENDING",
    getClientMealPlansSuccess = "GET_CLIENT_MEALPLANS_SUCCESS",
    getClientMealPlansError = "GET_CLIENT_MEALPLANS_ERROR",

    createMealPlanPending = "CREATE_MEALPLAN_PENDING",
    createMealPlanSuccess = "CREATE_MEALPLAN_SUCCESS",
    createMealPlanError = "CREATE_MEALPLAN_ERROR",
}

export const getMealPlansPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getMealPlansPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const getMealPlansSuccess = createAction<IMealPlanStateContext, IMealPlan[]>(
    MealPlanActionEnums.getMealPlansSuccess,
    (mealPlans: IMealPlan[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        mealPlans,
    }),
)

export const getMealPlansError = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getMealPlansError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)

export const getMealPlanPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getMealPlanPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const getMealPlanSuccess = createAction<IMealPlanStateContext, IMealPlan>(
    MealPlanActionEnums.getMealPlanSuccess,
    (mealPlan: IMealPlan) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        mealPlan,
    }),
)

export const getMealPlanError = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getMealPlanError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)

export const getClientMealPlansPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getClientMealPlansPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    }),
)

export const getClientMealPlansSuccess = createAction<IMealPlanStateContext, IMealPlan[]>(
    MealPlanActionEnums.getClientMealPlansSuccess,
    (mealPlans: IMealPlan[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        mealPlans,
    }),
)

export const getClientMealPlansError = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.getClientMealPlansError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true
    }),
)

export const createMealPlanPending = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.createMealPlanPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    }),
)

export const createMealPlanSuccess = createAction<IMealPlanStateContext, IMealPlan>(
    MealPlanActionEnums.createMealPlanSuccess,
    (mealPlan: IMealPlan) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        mealPlan,
    }),
)

export const createMealPlanError = createAction<IMealPlanStateContext>(
    MealPlanActionEnums.createMealPlanError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)



