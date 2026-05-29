import React, { useState } from 'react'

export default function FilterResults({
  filteredArray,
  handleDelete,
  handleEdit,
  editingId,
  handleSave,
  editCategory,
  editAmount,
  setEditCategory,
  setEditAmount,
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
                  onClick={() => handleSave(item.id, editCategory, editAmount)}
                >
                  Save Expense
                </button>
              </>
            ) : (
              <>
                <span className="flex-1 font-medium">
                  <div className="flex-1 font-medium">
                    {`Category: ${item.category}`}

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Amount: {item.formattedAmount}
                    </div>
                  </div>
                </span>

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
                    handleEdit(item.id, item.category, item.amount)
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
