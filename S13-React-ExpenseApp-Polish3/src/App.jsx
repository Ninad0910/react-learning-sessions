import React, { Suspense } from 'react'
import { useState } from 'react'
import FilterInput from './components/FilterInput'
import { useEffect } from 'react'

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
  const [toastMessage, setToastMessage] = useState(null)
  const [isDark, setIsDark] = useState(false)

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
    if (window.confirm('Are you sure you want to delete this Expense?')) {
      setUpdateExpense(modifiedArray)
      setToastMessage('Expense deleted')
    } else {
      alert('Expense not deleted')
    }
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
    setToastMessage('Expense updated')
  }

  function resetFilter() {
    setMinAmount('')
    setMaxAmount('')
  }

  useEffect(() => {
    if (toastMessage === null) return
    const timer = setTimeout(() => setToastMessage(null), 2000)
    return () => clearTimeout(timer)
  }, [toastMessage])

  // console.log(updateExpense)
  // console.log(filteredArray)
  // console.log(isDark);
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 transition-colors duration-300">
      <header className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full max-w-4xl mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Expense Tracker</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Add, edit and filter your expenses
          </p>
        </div>
        <button
          className="
            px-4 py-2 rounded-lg
            bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            hover:scale-105
            transition
            shadow-sm
            "
          onClick={() => {
            document.documentElement.classList.toggle('dark')
            setIsDark(!isDark)
          }}
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <div
        className="
        w-full
        max-w-4xl
        bg-white
        dark:bg-gray-800
        p-6
        rounded-2xl
        shadow-xl
        transition-colors
        "
      >
        <Suspense
          fallback={
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-12 mb-4"></div>
          }
        >
          <ExpenseForm
            setUpdateExpense={setUpdateExpense}
            updateExpense={updateExpense}
            setToastMessage={setToastMessage}
          />
        </Suspense>
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        <FilterInput
          minAmount={minAmount}
          maxAmount={maxAmount}
          setMinAmount={setMinAmount}
          setMaxAmount={setMaxAmount}
          resetFilter={resetFilter}
        />

        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <Suspense
          fallback={
            <>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-12 mb-3"></div>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-12 mb-3"></div>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-12 mb-3"></div>
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
        <div>
          {toastMessage && (
            <div
              className="
                fixed
                bottom-5
                right-5
                bg-green-600
                text-white
                px-5
                py-3
                rounded-xl
                shadow-xl
                animate-pulse
                "
            >
              {toastMessage}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
