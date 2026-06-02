import React, { Suspense } from 'react'
import { useState } from 'react'
import FilterInput from '../components/FilterInput'
import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import ConfirmModal from '../components/ConfirmModal'

const ExpenseForm = React.lazy(() => import('../components/ExpenseForm'))
const FilterResults = React.lazy(() => import('../components/FilterResults'))

export default function ExpensePage({ updateExpense, setUpdateExpense }) {
  const [minAmount, setMinAmount] = useState('')
  const [maxAmount, setMaxAmount] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const [editAmount, setEditAmount] = useState('')
  const [toastMessage, setToastMessage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [pendingDeleteId, setPendingDeleteId] = useState(null)

  const categories = [
    'All',
    ...new Set(updateExpense.map((exp) => exp.category)),
  ]

  /* Another way to pass props by grouping them in object */
  // const filterProps = { minAmount, maxAmount, setMinAmount, setMaxAmount }
  const filteredArray = [...updateExpense]
    .filter((exp) => {
      return (
        (selectedCategory === 'All' || exp.category === selectedCategory) &&
        (minAmount === '' || exp.amount >= Number(minAmount)) &&
        (maxAmount === '' || exp.amount <= Number(maxAmount))
      )
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.amount - b.amount
      }

      if (sortOrder === 'desc') {
        return b.amount - a.amount
      }

      return 0
    })
    .map((m) => {
      return {
        id: m.id,
        title: m.title,
        category: m.category,
        label: 'High Spend',
        amount: m.amount,
        formattedAmount: '₹' + m.amount,
      }
    })

  function handleDelete(item_id) {
    setShowModal(true)
    setPendingDeleteId(item_id)
  }

  function confirmDelete() {
    const modifiedArray = updateExpense.filter(
      (exp) => exp.id !== pendingDeleteId,
    )
    setUpdateExpense(modifiedArray)
    setShowModal(false)
    const deletedExpense = updateExpense.find((exp) => exp.id === pendingDeleteId)
    setToastMessage(`"${deletedExpense.title}" deleted`)
    setPendingDeleteId(null)
  }

  function cancelDelete() {
    setShowModal(false)
    setPendingDeleteId(null)
  }

  function handleEdit(item_id, item_title, item_category, item_amount) {
    setEditAmount(item_amount)
    setEditCategory(item_category)
    setEditTitle(item_title)
    setEditingId(item_id)
  }

  function handleSave(item_id, updatedTitle, updatedCategory, updatedAmount) {
    const updatedArray = updateExpense.map((update) => {
      if (update.id === item_id) {
        return {
          id: item_id,
          title: updatedTitle,
          category: updatedCategory,
          amount: Number(updatedAmount),
        }
      } else {
        return {
          id: update.id,
          title: update.title,
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
    setSelectedCategory('All')
    setSortOrder('')
  }

  useEffect(() => {
    if (toastMessage === null) return
    const timer = setTimeout(() => setToastMessage(null), 2000)
    return () => clearTimeout(timer)
  }, [toastMessage])

  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-8 transition-colors duration-300">
      <div
        className="
        w-full
        max-w-max
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
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          resetFilter={resetFilter}
          categories={categories}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
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
            editTitle={editTitle}
            editAmount={editAmount}
            handleSave={handleSave}
            setEditCategory={setEditCategory}
            setEditTitle={setEditTitle}
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

      {showModal && (
        <ConfirmModal
          message="Are you sure you want to delete this expense?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </section>
  )
}
