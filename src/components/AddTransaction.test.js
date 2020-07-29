import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AddTransaction from './AddTransaction';

describe('<AddTransaction />', () => {
    let component, mockHandler;

    beforeEach(() => {
        mockHandler = jest.fn()
        component = render(
            <AddTransaction handleAdd={mockHandler}/>
        )
    })

    test('renders 2 input forms and a button', () => {

        const transactionName = component.container.querySelector('.new-transaction-name')
        expect(transactionName).toBeDefined()

        const transactionAmount = component.container.querySelector('.new-transaction-amount')
        expect(transactionAmount).toBeDefined()

        const transactionButton = component.container.querySelector('.new-transaction-button')
        expect(transactionButton).toBeDefined()
    });

    test('clicking add transaction calls handler once for valid values', () => {
        const addButton = component.container.querySelector('.new-transaction-button')
        const transactionName = component.container.querySelector('.new-transaction-name')
        const transactionAmount = component.container.querySelector('.new-transaction-amount')

        fireEvent.change(transactionAmount, {
            target: { value: 2000 }
        })
        
        fireEvent.change(transactionName, {
            target: { value: 'test transaction' }
        })

        fireEvent.click(addButton)

        expect(mockHandler).toHaveBeenCalledTimes(1)
    });

    test('clicking add transaction does not call handler for invalid values', () => {
        const addButton = component.container.querySelector('.new-transaction-button')
        const transactionName = component.container.querySelector('.new-transaction-name')
        const transactionAmount = component.container.querySelector('.new-transaction-amount')

        fireEvent.change(transactionAmount, {
            target: { value: 0 }
        })
        
        fireEvent.change(transactionName, {
            target: { value: 'test transaction' }
        })

        fireEvent.click(addButton)

        expect(mockHandler).not.toBeCalled()
    });

});
