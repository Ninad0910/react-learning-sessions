import React from 'react'

export default function FilterInput({
  minAmount,
  maxAmount,
  setMaxAmount,
  setMinAmount,
  resetFilter,
}) {
  return (
    <>
      <div className="flex gap-6 mb-6 items-end">
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

        <button
          className="bg-blue-500 text-white px-5 py-2.5 rounded hover:bg-blue-600 transition"
          onClick={resetFilter}
        >
          Clear Filter
        </button>
      </div>
    </>
  )
}
