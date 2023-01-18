import React from 'react'
import './Expenses.css'
import Card from '../UI/Card'

function Expense(props) {
  const transactionAmounts = props.transactions.map((trans) => {
    return trans.amount
  })

  const incomes = transactionAmounts.filter((amount) => amount > 0)
  const totalIncome = incomes.reduce((total, initial) => total + initial, 0)

  const expenses = transactionAmounts.filter((amount) => amount < 0)
  const totalExpense = expenses.reduce((total, initial) => total + initial, 0)

  return (
    <Card className="expenses">
      <div>
        <p>Income</p>
        <h4 className="income">${totalIncome}</h4>
      </div>
      <div>
        <p>Expense</p>
        <h4 className="expense">${totalExpense}</h4>
      </div>
    </Card>
  )
}

export default Expense
