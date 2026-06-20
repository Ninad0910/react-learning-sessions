import React, { useReducer } from 'react'

const initialState = {
  count: 0,
  step: 1,
  history: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.step,
        history: [...state.history, state.count + state.step],
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.step,
        history: [...state.history, state.count - state.step],
      }
    case 'RESET':
      return initialState
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <main className="flex flex-col items-center gap-4 p-8">
      <p className="text-center">
        Previous Count: {state.history.at(-2) || 0} | Current Count:{' '}
        {state.count} | Step: {state.step} | History:{' '}
        {state.history.join(', ') || 'None'}
      </p>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          -
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
