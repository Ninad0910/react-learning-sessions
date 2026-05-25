import React from 'react'

export default function FilterResults({ filteredArray }) {
  return (
    <div className="result">
      {filteredArray.map((item) => (
        <div key={crypto.randomUUID()}>
          {`Category: ${item.category} & Amount: ${item.formattedAmount}`}
        </div>
      ))}
    </div>
  )
}
