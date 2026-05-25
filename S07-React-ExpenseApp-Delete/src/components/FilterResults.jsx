import React from 'react'

export default function FilterResults({ filteredArray, handleDelete }) {
  return (
    <div className="result-list">
      {filteredArray.map((item) => (
        <div className='result' key={item.id}>
          <span>{`Category: ${item.category} & Amount: ${item.formattedAmount}`}</span>
          <button onClick={() => handleDelete(item.id)}>Delete Expense</button>
        </div>
      ))}
    </div>
  )
}
