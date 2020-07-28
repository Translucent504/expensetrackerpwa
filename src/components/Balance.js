import React from 'react'
import './Balance.css'

const Balance = ({ transactions }) => {
    const balance = transactions.map(t => t.amount).reduce((p, c) => p + c, 0)
    return (
        <div className="balance-container">
            <h2 className="balance-text">Balance: </h2>
            <h2
                className="balance-amount"
                style={{ 'color': balance > 0 ? 'green' : 'red' }}>
                {balance.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}
            </h2>
        </div>
    )
}

export default Balance