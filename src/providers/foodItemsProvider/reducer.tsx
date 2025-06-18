import { handleActions } from "redux-actions"
import { INITIAL_STATE, IFoodStateContext } from "./context"
import { FoodActionEnums } from "./actions"

export const FoodReducer = handleActions<IFoodStateContext, IFoodStateContext>(
  {
    [FoodActionEnums.getFoodsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.searchFoodsPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.searchFoodsSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.searchFoodsError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsByCategoryPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsByCategorySuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.getFoodsByCategoryError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.createFoodPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.createFoodSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [FoodActionEnums.createFoodError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  }, INITIAL_STATE,
)
