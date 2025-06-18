import { createAction } from "redux-actions"
import type { IFoodStateContext, IFood } from "./context"

export enum FoodActionEnums {
    getFoodsPending = "GET_FOODS_PENDING",
    getFoodsSuccess = "GET_FOODS_SUCCESS",
    getFoodsError = "GET_FOODS_ERROR",

    getFoodPending = "GET_FOOD_PENDING",
    getFoodSuccess = "GET_FOOD_SUCCESS",
    getFoodError = "GET_FOOD_ERROR",

    searchFoodsPending = "SEARCH_FOODS_PENDING",
    searchFoodsSuccess = "SEARCH_FOODS_SUCCESS",
    searchFoodsError = "SEARCH_FOODS_ERROR",

    getFoodsByCategoryPending = "GET_FOODS_BY_CATEGORY_PENDING",
    getFoodsByCategorySuccess = "GET_FOODS_BY_CATEGORY_SUCCESS",
    getFoodsByCategoryError = "GET_FOODS_BY_CATEGORY_ERROR",

    createFoodPending = "CREATE_FOOD_PENDING",
    createFoodSuccess = "CREATE_FOOD_SUCCESS",
    createFoodError = "CREATE_FOOD_ERROR",
}

export const getFoodsPending = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodsPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const getFoodsSuccess = createAction<IFoodStateContext, IFood[]>(
    FoodActionEnums.getFoodsSuccess,
    (foods: IFood[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        foods,
    }),
)

export const getFoodsError = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodsError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)


export const getFoodPending = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const getFoodSuccess = createAction<IFoodStateContext, IFood>(
    FoodActionEnums.getFoodSuccess, (food: IFood) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        food,
    })
)

export const getFoodError = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)


export const searchFoodsPending = createAction<IFoodStateContext>(
    FoodActionEnums.searchFoodsPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const searchFoodsSuccess = createAction<IFoodStateContext, IFood[]>(
    FoodActionEnums.searchFoodsSuccess,
    (foods: IFood[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        foods,
    }),
)

export const searchFoodsError = createAction<IFoodStateContext>(
    FoodActionEnums.searchFoodsError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)


export const getFoodsByCategoryPending = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodsByCategoryPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false
    }),
)

export const getFoodsByCategorySuccess = createAction<IFoodStateContext, IFood[]>(
    FoodActionEnums.getFoodsByCategorySuccess,
    (foods: IFood[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        foods,
    }),
)

export const getFoodsByCategoryError = createAction<IFoodStateContext>(
    FoodActionEnums.getFoodsByCategoryError, () => ({
        isPending: false,
        isSuccess: false,
        isError: true,
    })
)


export const createFoodPending = createAction<IFoodStateContext>(
    FoodActionEnums.createFoodPending, () => ({
        isPending: true,
        isSuccess: false,
        isError: false,
    })
)

export const createFoodSuccess = createAction<IFoodStateContext, IFood>(
    FoodActionEnums.createFoodSuccess, (food: IFood) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        food,
    }),
)

export const createFoodError = createAction<IFoodStateContext>(
    FoodActionEnums.createFoodError, () => ({

        isPending: false,
        isSuccess: false,
        isError: true,
    })
)