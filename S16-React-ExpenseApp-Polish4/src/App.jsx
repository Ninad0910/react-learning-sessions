import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import useLocalStorage from './hooks/useLocalStorage'

const Statistics = React.lazy(() => import('./pages/Statistics'))
const ExpensePage = React.lazy(() => import('./pages/ExpensePage'))

const expenses = [
  {
    id: '1',
    title: 'Netflix Subscription',
    category: 'Entertainment',
    amount: 649,
  },
  { id: '2', title: 'Uber Ride', category: 'Transport', amount: 350 },
  { id: '3', title: 'Swiggy Delivery', category: 'Food', amount: 520 },
  { id: '4', title: 'Zudio Shopping', category: 'Clothing', amount: 1500 },
  { id: '5', title: 'Electricity Bill', category: 'Utilities', amount: 2400 },
  { id: '6', title: 'Movie Tickets', category: 'Entertainment', amount: 800 },
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
