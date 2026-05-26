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
    <div className="result-list">
      {filteredArray.length === 0 ? (
        <h1>No Expenses between these two amounts</h1>
      ) : (
        filteredArray.map((item) => (
          <div className="result" key={item.id}>
            {item.id === editingId ? (
              <>
                <label htmlFor="category">
                  Category:{' '}
                  <input
                    type="text"
                    id="category"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                </label>
                <label htmlFor="amount">
                  Amount:{' '}
                  <input
                    type="text"
                    id="amount"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                </label>
                <button
                  onClick={() => handleSave(item.id, editCategory, editAmount)}
                >
                  Save Expense
                </button>
              </>
            ) : (
              <>
                <span>{`Category: ${item.category} & Amount: ${item.formattedAmount}`}</span>
                <button
                  onClick={() =>
                    handleEdit(item.id, item.category, item.amount)
                  }
                >
                  Edit Expense
                </button>
              </>
            )}
            <button onClick={() => handleDelete(item.id)}>
              Delete Expense
            </button>
          </div>
        ))
      )}
    </div>
  )
}
