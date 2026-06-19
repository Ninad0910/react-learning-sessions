import React, { useReducer } from 'react'

const initialState = {
  count: 0,
  step: 1,
  history: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + state.step, history: [...state.history, state.count + state.step] }
    case 'DECREMENT':
      return { ...state, count: state.count - state.step, history: [...state.history, state.count - state.step] }
    case 'RESET':
      return initialState
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <main className="App">
      <p>Previous Count: {state.history.at(-2) || 0 } || Current Count: {state.count} || Step: {state.step} || History: {state.history.join(", ") || 'None'}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </main>
  )
}
