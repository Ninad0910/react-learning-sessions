import React from 'react'

export default function useFilteredExpense({ 
  updateExpense, 
  minAmount, 
  maxAmount, 
  selectedCategory, 
  sortOrder 
}) {
  const filteredArray = [...updateExpense]
    .filter((exp) => {
      return (
        (selectedCategory === 'All' || exp.category === selectedCategory) &&
        (minAmount === '' || exp.amount >= Number(minAmount)) &&
        (maxAmount === '' || exp.amount <= Number(maxAmount))
      )
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.amount - b.amount
      }

      if (sortOrder === 'desc') {
        return b.amount - a.amount
      }

      return 0
    })
    .map((m) => {
      return {
        id: m.id,
        title: m.title,
        category: m.category,
        label: 'High Spend',
        amount: m.amount,
        formattedAmount: '₹' + m.amount,
      }
    })  
  return filteredArray
}
