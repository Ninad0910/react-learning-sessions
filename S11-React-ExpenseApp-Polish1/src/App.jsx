import React, { Suspense } from 'react'
import { useState } from 'react'
import FilterInput from './components/FilterInput'

const ExpenseForm = React.lazy(() => import('./components/ExpenseForm'))
const FilterResults = React.lazy(() => import('./components/FilterResults'))

const expenses = [
  { id: '1', category: 'Mobile Bill', amount: 800 },
  { id: '2', category: 'Lunch', amount: 400 },
  { id: '3', category: 'Groceries', amount: 1200 },
  { id: '4', category: 'Gym Membership', amount: 600 },
  { id: '5', category: 'Coffee', amount: 200 },
]

export default function App() {
  const [updateExpense, setUpdateExpense] = useState(expenses)
  const [minAmount, setMinAmount] = useState('')
  const [maxAmount, setMaxAmount] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editCategory, setEditCategory] = useState('')
  const [editAmount, setEditAmount] = useState('')

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
    .sort((a, b) => a.amount - b.amount)
    .map((m) => {
      return {
        id: m.id,
        category: m.category,
        label: 'High Spend',
        amount: m.amount,
        formattedAmount: '₹' + m.amount,
      }
    })

  function handleDelete(item_id) {
    const modifiedArray = updateExpense.filter((mod) => mod.id !== item_id)
    window.confirm("Are you sure you want to delete this Expense?") ? setUpdateExpense(modifiedArray) : alert("Expense not deleted")
    // console.log(modifiedArray);
  }

  function handleEdit(item_id, item_category, item_amount) {
    setEditAmount(item_amount)
    setEditCategory(item_category)
    setEditingId(item_id)
  }

  function handleSave(item_id, upatedCategory, updatedAmount) {
    const updatedArray = updateExpense.map((update) => {
      if (update.id === item_id) {
        return {
          id: item_id,
          category: upatedCategory,
          amount: Number(updatedAmount),
        }
      } else {
        return {
          id: update.id,
          category: update.category,
          amount: Number(update.amount),
        }
      }
    })

    setUpdateExpense(updatedArray)
    setEditingId(null)
  }

  function resetFilter() {
    setMinAmount('')
    setMaxAmount('')
  }

  // console.log(updateExpense)
  // console.log(filteredArray)
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-3">Expense Tracker</h1>
      <p className="text-gray-500 mb-6">Add, edit and filter your expenses</p>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        {/* <Suspense
          fallback={
            <div className="animate-pulse bg-gray-200 rounded h-12 w-full mb-3"></div>
          }
        >
        </Suspense> */}
        <ExpenseForm setUpdateExpense={setUpdateExpense} />
        <hr className="my-6" />

        <FilterInput
          minAmount={minAmount}
          maxAmount={maxAmount}
          setMinAmount={setMinAmount}
          setMaxAmount={setMaxAmount}
          resetFilter = {resetFilter}
        />

        <hr className="my-6" />
        <Suspense
          fallback={
            <>
              <div className="animate-pulse bg-gray-200 rounded h-12 w-full mb-3"></div>
              <div className="animate-pulse bg-gray-200 rounded h-12 w-full mb-3"></div>
              <div className="animate-pulse bg-gray-200 rounded h-12 w-full mb-3"></div>
            </>
          }
        >
          <FilterResults
            filteredArray={filteredArray}
            handleDelete={handleDelete}
            editingId={editingId}
            handleEdit={handleEdit}
            editCategory={editCategory}
            editAmount={editAmount}
            handleSave={handleSave}
            setEditCategory={setEditCategory}
            setEditAmount={setEditAmount}
          />
        </Suspense>
      </div>
    </main>
  )
}
