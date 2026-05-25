import React, { useState } from 'react'

const expenses = [
  { category: 'Mobile Bill', amount: 800 },
  { category: 'Lunch', amount: 400 },
  { category: 'Groceries', amount: 1200 },
  { category: 'Gym Membership', amount: 600 },
  { category: 'Coffee', amount: 200 },
]

export default function ExpenseListWithState() {
  const [minAmount, setMinAmount] = useState('')
  const [maxAmount, setMaxAmount] = useState('')

  // Filter array to show object in array with amount greater then 500 but less then 1000, here logical and(&&) is used to check both conditions
  const newArray = expenses.filter(
    (exp) => exp.amount > minAmount && exp.amount < maxAmount,
    // (exp) => exp.amount > Number(minAmount) && exp.amount < Number(maxAmount),
  )

  newArray.sort((a, b) => b.amount - a.amount)
  // map array to remove amonunt key pair from each object
  const mapArray = newArray.map((m) => {
    return {
      category: m.category,
      label: 'high spend',
      formattedAmount: '₹' + m.amount,
    }
  })

  console.log(mapArray)

  return (
    <div>
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
