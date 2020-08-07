import React, { useState } from 'react'
import './AddTransaction.css'

type Props = {
    handleAdd: (transaction: transaction) => void;
}

const AddTransaction: React.FC<Props> = ({ handleAdd }) => {
    const [transactionName, setTransactionName] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const handleSubmit = (e: any) => {
        
        e.preventDefault()
        if (transactionAmount !== '0') {
            handleAdd({
                name: transactionName,
                amount: parseFloat(transactionAmount),
            })
        }

        setTransactionName('')
        setTransactionAmount('')
    }

    return (
        <form className='transaction-form' onSubmit={handleSubmit} >
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
                    placeholder='Transaction Amount'
                    className="new-transaction-amount" />
                <button className="new-transaction-button">Submit</button>
            </fieldset>
        </form>
    )
}

export default AddTransaction
