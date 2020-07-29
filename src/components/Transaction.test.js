import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Transaction from './Transaction';

describe('<Transaction />', () => {
    let component, transaction, mockHandler, index;
    beforeEach(()=> {
        transaction = {name: 'test transaction', amount: 5000}
        mockHandler = jest.fn()
        index = 1;
        
        component = render(
            <Transaction transaction={transaction} handleDelete={mockHandler} index={index} />
        )
    })

    test('should render transaction name, amount and delete button', () => {
        const transactionName = component.container.querySelector('.transaction-name')
        const transactionAmount = component.container.querySelector('.transaction-amount')
        const deleteButton = component.container.querySelector('.delete-transaction')

        expect(transactionAmount).toBeDefined()
        expect(transactionName).toBeDefined()
        expect(deleteButton).toBeDefined()
    })

    test('should call handler when delete button clicked', () => {
        const deleteButton = component.container.querySelector('.delete-transaction')
        fireEvent.click(deleteButton)
        expect(mockHandler).toBeCalledTimes(1)
    })

});
