import React from 'react'
import { useRef } from 'react'

export default function ExpenseForm({
  setUpdateExpense,
  updateExpense,
  setToastMessage,
}) {
  const categoryRef = useRef(null)
  const titleRef = useRef(null)
  const amountRef = useRef(null)
  return (
    <form
      className="
flex
flex-col
md:flex-row
gap-4
items-end
mb-6
"
      onSubmit={(e) => {
        e.preventDefault()

        const newExpense = {
          id: crypto.randomUUID(),
          title: titleRef.current.value,
          category: categoryRef.current.value,
          amount: Number(amountRef.current.value),
        }

        if (
          newExpense.category === '' ||
          newExpense.title === '' ||
          newExpense.amount === '' ||
          isNaN(newExpense.amount)
        ) {
          return alert('Add valid Expense')
        }

        if (
          updateExpense.some(
            (expense) =>
              expense.title.toLowerCase() === newExpense.title.toLowerCase(),
          )
        ) {
          return alert('Adding Same Title to new Expense')
        }

        // if we reach here, both checks passed
        setUpdateExpense((prevState) => [...prevState, newExpense])
        e.target.reset()
        setToastMessage('New Expense Added')
      }}
    >
      <div className="flex flex-col w-full">
        <label htmlFor="title" className="mb-2 font-medium">
          Title
        </label>

        <input
          type="text"
          ref={titleRef}
          id="title"
          maxLength="30"
          className="
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-700
px-4
py-2
rounded-lg
focus:ring-2
focus:ring-blue-500
outline-none
"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="category" className="mb-2 font-medium">
          Category
        </label>

        <input
          type="text"
          ref={categoryRef}
          id="category"
          maxLength="30"
          className="
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-700
px-4
py-2
rounded-lg
focus:ring-2
focus:ring-blue-500
outline-none
"
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="amount" className="mb-2 font-medium">
          Amount
        </label>

        <input
          type="text"
          ref={amountRef}
          id="amount"
          className="
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-700
px-4
py-2
rounded-lg
focus:ring-2
focus:ring-blue-500
outline-none
"
        />
      </div>

      <button
        type="submit"
        className="
bg-blue-600
hover:bg-blue-700
text-white
px-6
py-2.5
rounded-lg
transition
w-full
md:w-auto
"
      >
        Submit
      </button>
    </form>
  )
}
