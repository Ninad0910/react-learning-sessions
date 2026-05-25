import React, { useState } from 'react'

export default function FilterResults({
  filteredArray,
  handleDelete,
  handleEdit,
  editingId,
  handleSave,
  editCategory,
  editAmount
}) {
  const [updatedCategory, setUpdatedCategory] = useState(editCategory)
  const [updatedAmount, setUpdatedAmount] = useState(editAmount)
  console.log(editCategory);
  return (
    <div className="result-list">
      {filteredArray.map((item) => (
        <div className="result" key={item.id}>
          {item.id === editingId ? (
            <>
              <label htmlFor="category">
                Category:{' '}
                <input
                  type="text"
                  id="category"
                  value={updatedCategory}
                  onChange={(e) => setUpdatedCategory(e.target.value)}
                />
              </label>
              <label htmlFor="amount">
                Amount:{' '}
                <input
                  type="text"
                  id="amount"
                  value={updatedAmount}
                  onChange={(e) => setUpdatedAmount(e.target.value)}
                />
              </label>
              <button
                onClick={() =>
                  handleSave(item.id, updatedCategory, updatedAmount)
                }
              >
                Save Expense
              </button>
            </>
          ) : (
            <>
              <span>{`Category: ${item.category} & Amount: ${item.formattedAmount}`}</span>
              <button onClick={() => handleEdit(item.id, item.category, item.amount )}>Edit Expense</button>
            </>
          )}
          <button onClick={() => handleDelete(item.id)}>Delete Expense</button>
        </div>
      ))}
    </div>
  )
}
