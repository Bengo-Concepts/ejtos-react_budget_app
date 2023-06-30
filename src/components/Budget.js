import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);

    // Calculate total spending
    const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        // Get the new budget value from the input
        const newBudget = parseInt(event.target.value);

        // Check if the new budget is below total spending
        if (newBudget < totalSpending) {
            // Display an alert if the budget is lower than total spending
            window.alert('Budget cannot be lower than total spending.');
        } else {
            // Dispatch an action to update the budget value in the context
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                value={budget}
                step={10}
                max={20000}
                onChange={handleBudgetChange} // Add the onChange event handler
                min={totalSpending} // Set minimum value as total spending
            />
        </div>
    );
};

export default Budget;
