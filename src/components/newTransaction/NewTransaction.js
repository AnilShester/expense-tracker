import React, { useState } from 'react'
import './NewTransaction.css'

function NewTransaction(props) {
  const [amount, setAmount] = useState(0)
  const [text, setText] = useState('')

  const formSubmitHandler = (e) => {
    e.preventDefault()
    props.onHandleTransactions(amount, text)
    setAmount(0)
    setText('')
  }

  const textChangeHandler = (e) => {
    setText(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div className="new_transaction">
      <h5>Add new Transaction</h5>

      <form className="new_transaction_form" onSubmit={formSubmitHandler}>
        <label htmlFor="new_transaction_text"> Text</label>
        <input
          type="text"
          id="new_transaction_text"
          placeholder="Enter Text..."
          onChange={textChangeHandler}
          value={text}
        />

        <label htmlFor="new_transaction_amount">
          Amount ("-": Expense. "+": Income)
        </label>
        <input
          type="number"
          id="new_transaction_amount"
          placeholder="Enter Amount...."
          onChange={amountChangeHandler}
          value={amount}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default NewTransaction
