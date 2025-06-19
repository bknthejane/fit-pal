import { handleActions } from "redux-actions"
import { INITIAL_STATE, IMealPlanStateContext } from "./context"
import { MealPlanActionEnums } from "./actions"

export const MealPlanReducer = handleActions<IMealPlanStateContext, IMealPlanStateContext>(
    {
        [MealPlanActionEnums.getTrainerMealPlansPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getTrainerMealPlansSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getTrainerMealPlansError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getMealPlanPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getMealPlanSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getMealPlanError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getClientMealPlansPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getClientMealPlansSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.getClientMealPlansError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.createMealPlanPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.createMealPlanSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [MealPlanActionEnums.createMealPlanError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    }, INITIAL_STATE,
)
