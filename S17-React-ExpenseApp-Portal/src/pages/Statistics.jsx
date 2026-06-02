import React from 'react'

export default function Statistics({ updateExpense, setUpdateExpense }) {
  const amount = updateExpense.map((exp) => exp.amount)

  const totalSpent = updateExpense.reduce(
    (accumulator, current) => accumulator + current.amount,
    0,
  )

  const highestExpense = amount.length > 0 ? Math.max(...amount) : 0

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 w-full mx-auto px-10 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}

        <div
          className="
          bg-white dark:bg-gray-800
          rounded-xl
          shadow-md
          p-6
          text-center
          "
        >
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Total Expenses
          </p>

          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            {updateExpense.length}
          </h3>
        </div>

        {/* Card 2 */}

        <div
          className="
          bg-white dark:bg-gray-800
          rounded-xl
          shadow-md
          p-6
          text-center
          "
        >
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Total Amount Spent
          </p>

          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            ₹{totalSpent}
          </h3>
        </div>

        {/* Card 3 */}

        <div
          className="
          bg-white dark:bg-gray-800
          rounded-xl
          shadow-md
          p-6
          text-center
          "
        >
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Highest Expense
          </p>

          <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
            ₹{highestExpense}
          </h3>
        </div>
      </div>
    </div>
  )
}
