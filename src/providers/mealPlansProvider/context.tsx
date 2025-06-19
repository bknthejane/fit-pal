import { createContext } from "react"

export interface IMealPlan {
  name: string;
  clientId: string;
  trainerId: string;
  clientName: string;
  descrption: string;
  notes: string;
  clientNotes: [];
  meals: [
    {
      name: string;
      id: number;
      note: string;
      clientNotes: [];
      items: [
        {
          name: string;
          quantity: number;
          unit: string;
          calories: number;
          carbs: number;
          protein: number;
          fat: number;
          note: null;
        }
      ];
      itemTotals: {
        calories: number;
        carbs: number;
        protein: number;
        fat: number;
      };
    }
  ];
  mealTotals: { calories: number; carbs: number; protein: number; fat: number };
  base: 1;
}

export interface IMealPlanStateContext {
  isPending: boolean
  isSuccess: boolean
  isError: boolean
  mealPlan?: IMealPlan
  mealPlans?: IMealPlan[]
}

export interface IMealPlanActionContext {
  getTrainerMealPlans: (trainerId: string) => void
  getMealPlan: (id: string) => void
  getClientMealPlans: (clientId: string) => void
  createMealPlan: (mealPlan: IMealPlan) => void
}

export const INITIAL_STATE: IMealPlanStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
}


export const MealPlanStateContext = createContext<IMealPlanStateContext>(INITIAL_STATE)
export const MealPlanActionContext = createContext<IMealPlanActionContext>(undefined!)
