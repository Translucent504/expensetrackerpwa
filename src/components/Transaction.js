import React from 'react'
import './Transaction.css'

const Transaction = ({transaction, handleDelete, index}) => {
    return (
        <div className="transaction">
            <div className="transaction-name" >{transaction.name}</div>
            <div className="transaction-amount">{transaction.amount}</div>
            <button onClick={() => handleDelete(index)} className="delete-transaction">X</button>
        </div>
    )
}

export default Transaction
