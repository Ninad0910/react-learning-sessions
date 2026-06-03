import React from 'react'
import { NavLink } from 'react-router-dom'
import useThemeContext from '../context/ThemeContext'

export default function Header() {
  const {isDark, setIsDark} = useThemeContext()
  return (
    <header
      className="
    sticky top-0 z-50
    w-full
    flex flex-col sm:flex-row
    items-start sm:items-center
    justify-between
    gap-4
    px-6 py-4
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    border-b border-gray-200 dark:border-gray-700
    shadow-sm
  "
    >
      <div>
        <h1 className="text-4xl font-bold mb-2">Expense Tracker</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Add, edit and filter your expenses
        </p>
      </div>
      <div className="flex items-center text-2xl justify-center gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `
    transition
    pb-1
    ${
      isActive
        ? 'text-blue-600 font-bold border-b-2 border-blue-600'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
    }
    `
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            `
    transition
    pb-1
    ${
      isActive
        ? 'text-blue-600 font-bold border-b-2 border-blue-600'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
    }
    `
          }
        >
          Statistics
        </NavLink>
      </div>
      <button
        className="
px-3 py-2
rounded-lg
text-xl
font-medium
bg-gray-100 dark:bg-gray-700
border border-gray-300 dark:border-gray-600
hover:scale-105
transition
"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  )
}
