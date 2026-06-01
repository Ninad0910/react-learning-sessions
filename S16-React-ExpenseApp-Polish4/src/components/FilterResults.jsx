import React, { useState } from 'react'

export default function FilterResults({
  filteredArray,
  handleDelete,
  handleEdit,
  editingId,
  handleSave,
  editTitle,
  editCategory,
  editAmount,
  setEditCategory,
  setEditAmount,
  setEditTitle,
}) {
  return (
    <div className="space-y-4">
      {filteredArray.length === 0 ? (
        <h1
          className="
        text-xl
        font-bold
        text-center
        text-red-500
        py-10
        "
        >
          No Expenses between these two amounts
        </h1>
      ) : (
        filteredArray.map((item) => (
          <div
            key={item.id}
            className={`flex
                  flex-col
                  md:flex-row
                  gap-4
                  p-5
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  bg-gray-50
                  dark:bg-gray-900
                  shadow-sm
                  ${item.id === editingId ? 'items-end' : 'items-center'}
                  `}
          >
            {item.id === editingId ? (
              <>
                <label className="flex flex-col w-full">
                  Title
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="
                      border
                      dark:border-gray-600
                      dark:bg-gray-700
                      rounded-lg
                      px-3
                      py-2
                      "
                  />
                </label>
                <label className="flex flex-col w-full">
                  Category
                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="
                      border
                      dark:border-gray-600
                      dark:bg-gray-700
                      rounded-lg
                      px-3
                      py-2
                      "
                  />
                </label>

                <label className="flex flex-col w-full">
                  Amount
                  <input
                    type="text"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                    className="
                      border
                      dark:border-gray-600
                      dark:bg-gray-700
                      rounded-lg
                      px-3
                      py-2
                      "
                  />
                </label>

                <button
                  className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  rounded-lg
                  px-4
                  py-2
                  "
                  onClick={() =>
                    handleSave(item.id, editTitle, editCategory, editAmount)
                  }
                >
                  Save Expense
                </button>
              </>
            ) : (
              <>
                <div className="flex-1 space-y-1">
                  <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </p>

                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Category:
                    <span className="ml-1 font-medium text-gray-700 dark:text-gray-300">
                      {item.category}
                    </span>
                  </p>

                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {item.formattedAmount}
                  </p>
                </div>

                <button
                  className="
bg-yellow-500
hover:bg-yellow-600
text-white
rounded-lg
px-4
py-2
"
                  onClick={() =>
                    handleEdit(item.id, item.title, item.category, item.amount)
                  }
                >
                  Edit Expense
                </button>
              </>
            )}

            <button
              className="
bg-red-600
hover:bg-red-700
text-white
rounded-lg
px-4
py-2
"
              onClick={() => handleDelete(item.id)}
            >
              Delete Expense
            </button>
          </div>
        ))
      )}
    </div>
  )
}
