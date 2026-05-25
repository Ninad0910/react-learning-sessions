import React, { useState } from 'react'
import { useRef } from 'react'

const expenses = [
  { category: 'Mobile Bill', amount: 800 },
  { category: 'Lunch', amount: 400 },
  { category: 'Groceries', amount: 1200 },
  { category: 'Gym Membership', amount: 600 },
  { category: 'Coffee', amount: 200 },
]

export default function ExpenseForm() {
  const [updateExpense, setUpdateExpense] = useState(expenses)
  const categoryRef = useRef(null)
  const amountRef = useRef(null)
  const [minAmount, setMinAmount] = useState('')
  const [maxAmount, setMaxAmount] = useState('')

  // Filter array to show object in array with amount greater then 500 but less then 1000, here logical and(&&) is used to check both conditions
  const newArray = updateExpense.filter(
    (exp) => {
      // Condition to added to check if minAmount & maxAmount are added but not working properly
      if (minAmount === '' || maxAmount === '') {
        return exp
      } else {
        return exp.amount > minAmount && exp.amount < maxAmount
      }
    },
    // (exp) => exp.amount > Number(minAmount) && exp.amount < Number(maxAmount),
  )

  newArray.sort((a, b) => b.amount - a.amount)
  // map array to remove amonunt key pair from each object
  const mapArray = newArray.map((m) => {
    return {
      category: m.category,
      label: 'High Spend',
      formattedAmount: '₹' + m.amount,
    }
  })

  console.log(updateExpense)

  return (
    <div>
      <form
        action=""
        className="expense-form"
        onSubmit={(e) => {
          e.preventDefault()
          const newExpense = {
            category: categoryRef.current.value,
            amount: amountRef.current.value,
          }
          console.log(newExpense)
          //  I am trying to update expense array here but its not working
          setUpdateExpense((prevState) => [...prevState, newExpense])
        }}
      >
        <label htmlFor="category">Category: </label>
        {/* Should i make this one a controlled element too using useState */}
        <input type="text" ref={categoryRef} id="category" />
        <label htmlFor="amount">Amount: </label>
        <input type="text" ref={amountRef} id="amount" />
        <button type="submit">Submit</button>
      </form>
      <hr />
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

      <div className="result">
        {/* Using map filter Method for looping and have used i as a index to be passed as an key value*/}
        {mapArray.map((item, i) => (
          <div
            key={i}
          >{`Category: ${item.category} & Amount: ${item.formattedAmount}`}</div>
        ))}
      </div>
    </div>
  )
}
