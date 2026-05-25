import React from 'react'
import { useRef } from 'react'

export default function ExpenseForm({ setUpdateExpense }) {
  const categoryRef = useRef(null)
  const amountRef = useRef(null)
  return (
    <form
      action=""
      className="expense-form"
      onSubmit={(e) => {
        e.preventDefault()
        const newExpense = {
          id: crypto.randomUUID(),
          category: categoryRef.current.value,
          amount: Number(amountRef.current.value),
        }
        if (
          newExpense.category === '' ||
          newExpense.amount === '' ||
          isNaN(newExpense.amount)
        ) {
          console.log('Invalid Input')
        } else {
          setUpdateExpense((prevState) => [...prevState, newExpense])
          e.target.reset()
        }
      }}
    >
      <label htmlFor="category">Category: </label>
      <input type="text" ref={categoryRef} id="category" />
      <label htmlFor="amount">Amount: </label>
      <input type="text" ref={amountRef} id="amount" />
      <button type="submit">Submit</button>
    </form>
  )
}
