import React from 'react'
import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import FilterInput from './components/FilterInput'
import FilterResults from './components/FilterResults'

const expenses = [
  { category: 'Mobile Bill', amount: 800 },
  { category: 'Lunch', amount: 400 },
  { category: 'Groceries', amount: 1200 },
  { category: 'Gym Membership', amount: 600 },
  { category: 'Coffee', amount: 200 },
]

export default function App() {
  const [updateExpense, setUpdateExpense] = useState(expenses)
  const [minAmount, setMinAmount] = useState('')
  const [maxAmount, setMaxAmount] = useState('')
  /* Another way to pass props by grouping them in object */
  const filterProps = { minAmount, maxAmount, setMinAmount, setMaxAmount }
  const filteredArray = updateExpense
    .filter((exp) => {
      if (minAmount === '' || maxAmount === '') {
        return exp
      } else {
        return exp.amount > Number(minAmount) && exp.amount < Number(maxAmount)
      }
    })
    .sort((a, b) => b.amount - a.amount)
    .map((m) => {
      return {
        category: m.category,
        label: 'High Spend',
        formattedAmount: '₹' + m.amount,
      }
    })
  return (
    <>
      <ExpenseForm setUpdateExpense={setUpdateExpense} />
      <hr />
      <FilterInput
        minAmount={minAmount}
        maxAmount={maxAmount}
        setMinAmount={setMinAmount}
        setMaxAmount={setMaxAmount}
      />
      {/* Spread props object using spread operator */}
      {/* <FilterInput {...filterProps} /> */}
      <hr />
      <FilterResults filteredArray={filteredArray} />
    </>
  )
}
