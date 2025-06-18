import { createContext } from 'react';

export interface IFood {
    id?: string
    name?: string
    protein?: number
    carbs?: number
    sugar?: number
    fat?: number
    fiber?: number
    sodium?: number
    potassium?: number
    category?: string
    servingSize?: number
    cholesterol?: number
    energy?: number
}

export interface IFoodStateContext {
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
    food?: IFood,
    foods?: IFood[]
}

export interface IFoodActionContext {
    getFoods: () => void;
    getFood: (id: string) => void;
    searchFoods: (term: string) => void;
    getFoodsByCategory: (category: string) => void;
    createFood: (food: IFood) => void;
}


export const INITIAL_STATE: IFoodStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const FoodStateContext = createContext<IFoodStateContext>(INITIAL_STATE);
export const FoodActionContext = createContext<IFoodActionContext>(undefined!)