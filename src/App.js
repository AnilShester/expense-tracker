import './App.css'
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import Expenses from './components/expenses/Expenses'
import History from './components/history/History'
import NewTransaction from './components/newTransaction/NewTransaction'
import React, { useState } from 'react'

function App() {
  const [transactions, setTransactions] = useState([])

  const handleTransactions = (amount, text) => {
    return setTransactions((prevState) => [
      ...prevState,
      { amount: parseFloat(amount), text: text, id: Math.random() },
    ])
  }

  return (
    <div className="main-container">
      <Header />
      <Balance transactions={transactions} />
      <Expenses transactions={transactions} />
      <History transactions={transactions} />
      <NewTransaction onHandleTransactions={handleTransactions} />
    </div>
  )
}

export default App
