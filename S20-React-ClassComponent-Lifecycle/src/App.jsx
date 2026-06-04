import React, { useState } from 'react'
import ExpenseStats from './components/ExpenseStats'

export default function App() {
  const [isRendered, setIsRendered] = useState(true)

  return (
    <div style={{ padding: '20px' }}>
      <h1>Expense Dashboard</h1>

      <button onClick={() => setIsRendered(!isRendered)}>
        {isRendered
          ? 'Destroy Component (Unmount)'
          : 'Create Component (Mount)'}
      </button>

      <hr />

      {isRendered ? <ExpenseStats /> : <p>The component is gone unmounted from React Virtual DOM</p>}
    </div>
  )
}
