import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import TransactionList from './TransactionList';

describe('<TransactionList />', () => {

    test('should render message if transaction list empty', () => {
        const { getByText } = render(<TransactionList transactions={[]} />)
        const placeholder = getByText('Enter a Transaction Below')
        expect(placeholder).toBeDefined()
    })

    test('should not render message if transaction list is filled', () => {
        const component = render(<TransactionList transactions={[{name:'test', amount:200}]} />)
        const placeholder = component.queryByText('Enter a Transaction Below')
        expect(placeholder).not.toBeInTheDocument()
    })

    test('should render correct number of li elements as provided in prop array', () => {
        const transactions = [
            {name:'test', amount:100},
            {name:'test2', amount:-200},
            {name:'test3', amount:300}
        ]
        const component = render(<TransactionList transactions={transactions} />)
        const transactionList = component.queryAllByTestId('transaction')
        expect(transactionList).toHaveLength(transactions.length)
    })

})
