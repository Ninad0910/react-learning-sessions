import React from 'react'
import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import FilterInput from './components/FilterInput'
import FilterResults from './components/FilterResults'

const expenses = [
  { id: 1, category: 'Mobile Bill', amount: 800 },
  { id: 2, category: 'Lunch', amount: 400 },
  { id: 3, category: 'Groceries', amount: 1200 },
  { id: 4, category: 'Gym Membership', amount: 600 },
  { id: 5, category: 'Coffee', amount: 200 },
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
    console.log(updateExpense);
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
