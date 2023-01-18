import React from 'react'

import './Balance.css'

function Balance(props) {
  const transactionAmounts = props.transactions.map((trans) => {
    return trans.amount
  })

  const total = transactionAmounts.reduce(
    (total, current) => total + current,
    0
  )

  return (
    <div className="balance">
      <h3>Your Balance</h3>
      <h1> ${total} </h1>
    </div>
  )
}

export default Balance
