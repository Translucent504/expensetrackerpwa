import React from 'react'
import './Transaction.css'

type Props = {
    transaction: transaction;
    handleDelete: (index: number) => void;
    index: number;
}

const Transaction: React.FC<Props> = ({ transaction, handleDelete, index }) => {
    return (
        <div data-testid="transaction" className="transaction">
            <div className="transaction-name" >{transaction.name}</div>
            <div className="transaction-amount">{transaction.amount.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</div>
            <button onClick={() => handleDelete(index)} className="delete-transaction">X</button>
        </div>
    )
}

export default Transaction
