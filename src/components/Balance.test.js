import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Balance from './Balance';

describe('<Balance />', () => {
    let component, transactions;

    beforeEach(() => {
        transactions = [
            { name: 'transaction1', amount: 2000 },
            { name: 'transaction2', amount: -1500 },
        ]
        component = render(
            <Balance transactions={transactions} />
        )
    })

    test('renders Balance text and Balance amount', () => {

        const balanceText = component.container.querySelector('.balance-text')
        expect(balanceText).toBeDefined()

        const balanceAmount = component.container.querySelector('.balance-amount')
        expect(balanceAmount).toBeDefined()

    });

    test('renders green balance for positive amount', () => {
        const balanceAmount = component.container.querySelector('.balance-amount')

        expect(balanceAmount).toHaveStyle('color: green')
    });

    test('renders red balance for negative amount', () => {
        const balanceAmount = render(<Balance
            transactions={[{
                name: 'negative', amount: -1500
            }]} />)
            .container.querySelector('.balance-amount')

        expect(balanceAmount).toHaveStyle('color: red')
    });

});
