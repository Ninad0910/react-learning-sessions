import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import useLocalStorage from './hooks/useLocalStorage'

const Statistics = React.lazy(() => import('./pages/Statistics'))
const ExpensePage = React.lazy(() => import('./pages/ExpensePage'))

const expenses = [
  { id: '1', category: 'Mobile Bill', amount: 800 },
  { id: '2', category: 'Lunch', amount: 400 },
  { id: '3', category: 'Groceries', amount: 1200 },
  { id: '4', category: 'Gym Membership', amount: 600 },
  { id: '5', category: 'Coffee', amount: 200 },
]

export default function App() {
  const [updateExpense, setUpdateExpense] = useLocalStorage('Expense', expenses)
  const [isDark, setIsDark] = useLocalStorage('Dark Mode', false)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <ExpensePage
                updateExpense={updateExpense}
                setUpdateExpense={setUpdateExpense}
              />
            }
          />
          <Route
            path="/statistics"
            element={
              <Statistics
                updateExpense={updateExpense}
                setUpdateExpense={setUpdateExpense}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
