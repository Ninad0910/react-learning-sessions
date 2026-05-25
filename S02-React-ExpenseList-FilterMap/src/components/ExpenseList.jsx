import React from 'react'

const expenses = [
  { category: 'Mobile Bill', amount: 800 },
  { category: 'Lunch', amount: 400 },
  { category: 'Groceries', amount: 1200 },
  { category: 'Gym Membership', amount: 600 },
  { category: 'Coffee', amount: 200 },
]

export default function ExpenseList() {

  // Filter array to show object in array with amount greater then 500 but less then 1000, here logical and(&&) is used to check both conditions
  const newArray = expenses.filter((exp) => exp.amount > 500 && exp.amount < 1000)

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
    {/* Using map filter Method for looping and have used i as a index to be passed as an key value*/}
      {mapArray.map((item, i) => (
        <div key={i}>{`Category: ${item.category} & Amount: ${item.formattedAmount}`}</div>
      ))}
    </div>
  )
}
