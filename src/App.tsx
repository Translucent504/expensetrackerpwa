import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './firebaseInit'

function App() {
  const [transactions, setTransactions] = useState<transaction[]>([])
  const handleDelete = (index: number) => {
    setTransactions(transactions.slice(0, index).concat(transactions.slice(index + 1)))
  }

  const handleAdd = (transaction: transaction) => {
    setTransactions(transactions.concat([transaction]))
  }



  return (
    <div className="App">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList handleDelete={handleDelete} transactions={transactions} />
      <AddTransaction handleAdd={handleAdd} />
    </div>
  );
}

export default App;
