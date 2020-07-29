import React from 'react'
import './IncomeExpense.css'

const IncomeExpense:React.FC<{transactions: transaction[]}> = ({ transactions }) => {
    const ic = transactions.reduce((p, c) => {
        if (c.amount > 0) {
            return { ...p, income: p.income + c.amount }
        } else {
            return { ...p, expense: p.expense + c.amount }
        }
    }, { income: 0, expense: 0 })
    return (
        <div className="income-expense-container">
            <div className="income">
                <h4>Income</h4>
                <h4>{ic.income.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</h4>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <h4>{ic.expense.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</h4>
            </div>
        </div>
    )
}

export default IncomeExpense
