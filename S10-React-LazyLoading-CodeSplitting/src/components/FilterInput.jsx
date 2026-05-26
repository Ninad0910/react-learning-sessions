import React from 'react'

export default function FilterInput({
  minAmount,
  maxAmount,
  setMaxAmount,
  setMinAmount,
}) {
  return (
    <>
      <div className="flex gap-6 mb-6">
        <div className="flex flex-col">
          <label htmlFor="MinAmount" className="mb-1 font-medium">
            Enter Minimum Amount
          </label>

          <input
            type="text"
            id="MinAmount"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="MaxAmount" className="mb-1 font-medium">
            Enter Maximum Amount
          </label>

          <input
            type="text"
            id="MaxAmount"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </>
  )
}
