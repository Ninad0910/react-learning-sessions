import React from 'react'

export default function SummaryBar({ filteredExpenses }) {
  const amount = filteredExpenses.map((exp) => exp.amount)

  const totalSpent = filteredExpenses.reduce(
    (accumulator, current) => accumulator + current.amount,
    0,
  )

  const averageExpense = amount.length > 0 ? totalSpent / amount.length : 0

  return (
    <div
      className="
    sticky bottom-0 z-40
    w-full max-w-4xl mx-auto
    bg-gray-100/90 dark:bg-gray-900/90
    backdrop-blur-md
    border-t border-gray-200 dark:border-gray-700
    px-4 sm:px-6 py-4
    shadow-lg
    rounded-2xl
  "
    >
      <div
        className="
    flex items-center justify-around
    bg-white dark:bg-gray-800
    border border-gray-200 dark:border-gray-700
    rounded-xl
    shadow-sm
    py-3 px-4
  "
      >
        {/* Total Count */}

        <div className="flex flex-col items-center flex-1">
          <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Total Count
          </span>

          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {filteredExpenses.length}
          </span>
        </div>

        <div className="h-10 w-px bg-gray-200 dark:bg-gray-700" />

        {/* Total Amount */}

        <div className="flex flex-col items-center flex-1">
          <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Total Amount
          </span>

          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            ₹{totalSpent}
          </span>
        </div>

        <div className="h-10 w-px bg-gray-200 dark:bg-gray-700" />

        {/* Average Amount */}

        <div className="flex flex-col items-center flex-1">
          <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Average Amount
          </span>

          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
            ₹{averageExpense.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
