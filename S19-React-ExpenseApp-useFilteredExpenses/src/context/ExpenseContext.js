import { createContext, useContext } from 'react'

export const ExpenseContext = createContext(null)

export default function useExpenseContext() {
  const context = useContext(ExpenseContext)
  // console.log(context);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider')
  }
  return context
}
