import React from 'react'

export default function FilterInput({
  minAmount,
  maxAmount,
  setMaxAmount,
  setMinAmount,
}) {
  return (
    <>
      <div className="inputs">
        <div>
          <label htmlFor="MinAmount">Enter Minimum Amount: </label>
          <input
            type="text"
            id="MinAmount"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="MaxAmount">Enter Maximum Amount: </label>
          <input
            type="text"
            id="MaxAmount"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
