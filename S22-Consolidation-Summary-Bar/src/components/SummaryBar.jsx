import React from 'react'

export default function SummaryBar({ filteredExpenses }) {
console.log(filteredExpenses);
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
    "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}

        <div
          className="
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-xl
            p-4
            text-center
            shadow-sm
        "
        >
          <p className="text-xs uppercase tracking-wide font-medium text-gray-500 dark:text-gray-400 mb-2 ">
            Total count
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            {filteredExpenses.length}
          </h3>
        </div>

        {/* Card 2 */}

        <div
          className="
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-xl
            p-4
            text-center
            shadow-sm
        "
        >
          <p className="text-xs uppercase tracking-wide font-medium text-gray-500 dark:text-gray-400 mb-2 ">
            Total amount
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            ₹{totalSpent}
          </h3>
        </div>

        {/* Card 3 */}

        <div
          className="
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-xl
            p-4
            text-center
            shadow-sm
        "
        >
          <p className="text-xs uppercase tracking-wide font-medium text-gray-500 dark:text-gray-400 mb-2 ">
            Average amount
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            ₹{averageExpense.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  )
}
