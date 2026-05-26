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
        <h1 className="text-xl font-bold text-red-500">
          No Expenses between these two amounts
        </h1>
      ) : (
        filteredArray.map((item) => (
          <div
            key={item.id}
            className={`flex ${item.id === editingId ? 'items-end' : 'items-center'} gap-4 border p-4 rounded shadow-sm`}
          >
            {item.id === editingId ? (
              <>
                <label className="flex flex-col">
                  Category
                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                </label>

                <label className="flex flex-col">
                  Amount
                  <input
                    type="text"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                    className="border px-2 py-1 rounded"
                  />
                </label>

                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={() => handleSave(item.id, editCategory, editAmount)}
                >
                  Save Expense
                </button>
              </>
            ) : (
              <>
                <span className="flex-1">
                  {`Category: ${item.category} & Amount: ${item.formattedAmount}`}
                </span>

                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() =>
                    handleEdit(item.id, item.category, item.amount)
                  }
                >
                  Edit Expense
                </button>
              </>
            )}

            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
