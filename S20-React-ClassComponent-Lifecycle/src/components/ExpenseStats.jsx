import React from 'react'

export default class ExpenseStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'All',
      expenses: [
        { id: 1, name: 'Rent', amount: 1200 },
        { id: 2, name: 'Groceries', amount: 350 },
        { id: 3, name: 'Electricity', amount: 600 },
      ],
    }
  }

  componentDidMount() {
    console.log('Componenet Mounted');
  }


  componentDidUpdate(prevProps, prevState) {
  if(prevState.filter != this.state.filter){
    console.log(`Filter changed from ${prevState.filter} to ${this.state.filter}`);
  }
}

componentWillUnmount() {
  console.log('Component Unmounted');
}

setFilter(newFilter){
    this.setState({ filter: newFilter })
}

  render() {
    const filteredExpenses = this.state.expenses.filter(expense => {    
      if (this.state.filter === 'High') {
        return expense.amount > 500;
      }
      return true;
    })

    return (
      <div className="stats">
        <h3>Expense Stats</h3>
        <div>
          <button onClick={() => this.setFilter('All')}>Show All</button>
          <button onClick={() => this.setFilter('High')}>Show High (Greater then 500)</button>
        </div>
        <p>Current Filter: <strong>{this.state.filter}</strong></p>
        <ul>
          {filteredExpenses.map(expense => (
            <li key={expense.id}>
              {expense.name}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
