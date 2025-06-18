import { createContext } from "react"

export interface IMealPlan {
  id: string
  name: string
  client?: string
  trainer?: string
  clientName: string
  description: string
  notes?: string
  clientNotes?: string
  meals?: string[]
  mealTotals?: string
  base?: string
}

export interface IMealPlanStateContext {
  isPending: boolean
  isSuccess: boolean
  isError: boolean
  mealPlan?: IMealPlan
  mealPlans?: IMealPlan[]
}

export interface IMealPlanActionContext {
  getMealPlans: () => void
  getMealPlan: (id: string) => void
  getClientMealPlans: (clientId: string) => void
  createMealPlan: (mealPlan: string) => void
}

export const INITIAL_STATE: IMealPlanStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
}


export const MealPlanStateContext = createContext<IMealPlanStateContext>(INITIAL_STATE)
export const MealPlanActionContext = createContext<IMealPlanActionContext>(undefined!)
