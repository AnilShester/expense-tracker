import React from 'react'
import Card from '../UI/Card'
import styles from './History.module.css'

function History(props) {
  return (
    <div className={styles.history}>
      <p>History</p>
      {props.transactions.map((trans) => {
        return (
          <Card className={styles.history_item} key={trans.id}>
            <div className={styles.history__details}>
              <p>{trans.text}</p>
              <div className={styles.history__amount}>
                <p>{trans.amount}</p>
                <div
                  className={
                    trans.amount > 0
                      ? `${styles.history__color} ${styles.green}`
                      : `${styles.history__color} ${styles.red}`
                  }
                ></div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default History
