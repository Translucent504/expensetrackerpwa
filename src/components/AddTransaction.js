import React, { useState } from 'react'
import './AddTransaction.css'

const AddTransaction = ({ handleAdd }) => {
    const [transactionName, setTransactionName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd({
            name: transactionName,
            amount: parseFloat(transactionAmount),
        })
        setTransactionName('')
        setTransactionAmount(0)
    }

    return (
        <form onSubmit={handleSubmit} >
            <fieldset className="add-transaction-container" >
                <legend>Add Transaction</legend>
                <input required value={transactionName}
                    onChange={e => setTransactionName(e.target.value)}
                    type="text"
                    placeholder='Transaction Name'
                    className="new-transaction-name" />
                <input required value={transactionAmount}
                    onChange={e => setTransactionAmount(e.target.value)}
                    type="number"
                    className="new-transaction-amount" />
                <button className="new-transaction-button">Submit</button>
            </fieldset>
        </form>
    )
}

export default AddTransaction
