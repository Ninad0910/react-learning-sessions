import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'

const counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0)

  return (
    <main className="flex flex-col items-center gap-4 p-8">
      <p className="text-4xl font-bold">{count}</p>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <input
        type="number"
        value={amount}
        className="border rounded px-3 py-2 w-32 text-center"
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(incrementByAmount(Number(amount)))}
        >
          Add Amount
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => {
            setAmount(0)
            dispatch(reset())
          }}
        >
          Reset
        </button>
      </div>
    </main>
  )
}

export default counter
