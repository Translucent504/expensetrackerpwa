import React from 'react'
import Transaction from './Transaction'
import './TransactionList.css'

type Props = {
    transactions: transaction[];
    handleDelete: (index: number) => void;
}

const TransactionList: React.FC<Props> = ({ transactions, handleDelete }) => {
    return (transactions.length ?
        <ul className="transaction-list">
            {transactions.map((t, index) => <li key={t.name+index.toString()}><Transaction handleDelete={handleDelete} transaction={t} index={index} /></li>)}
        </ul>
        :
        <h1 className='guide-text'>Enter a Transaction Below</h1>
    )
}

export default TransactionList
