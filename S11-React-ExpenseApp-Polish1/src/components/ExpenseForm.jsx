import React from 'react'
import { useRef } from 'react'

export default function ExpenseForm({ setUpdateExpense }) {
  const categoryRef = useRef(null)
  const amountRef = useRef(null)
  return (
    <form
      className="flex items-end gap-4 rounded-lg mb-6"
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
      <div className="flex flex-col">
        <label htmlFor="category" className="mb-1 font-medium">
          Category
        </label>

        <input
          type="text"
          ref={categoryRef}
          id="category"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="amount" className="mb-1 font-medium">
          Amount
        </label>

        <input
          type="text"
          ref={amountRef}
          id="amount"
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >Submit
      </button>
    </form>
  )
}
