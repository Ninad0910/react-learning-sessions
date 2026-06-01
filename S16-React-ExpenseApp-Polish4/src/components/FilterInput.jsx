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
      <div
        className="
flex
flex-col
md:flex-row
gap-4
items-end
mb-6
"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="MinAmount" className="mb-2 font-medium">
            Enter Minimum Amount
          </label>

          <input
            type="text"
            id="MinAmount"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
            className="
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-700
px-4
py-2
rounded-lg
focus:ring-2
focus:ring-blue-500
outline-none
"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="MaxAmount" className="mb-2 font-medium">
            Enter Maximum Amount
          </label>

          <input
            type="text"
            id="MaxAmount"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
            className="
border
border-gray-300
dark:border-gray-600
bg-white
dark:bg-gray-700
px-4
py-2
rounded-lg
focus:ring-2
focus:ring-blue-500
outline-none
"
          />
        </div>

        <button
          className="
bg-blue-600
hover:bg-blue-700
text-white
px-6
py-2.5
rounded-lg
transition
w-full
md:w-auto
min-w-[140px]
whitespace-nowrap
"
          onClick={resetFilter}
        >
          Clear Filter
        </button>
      </div>
    </>
  )
}
