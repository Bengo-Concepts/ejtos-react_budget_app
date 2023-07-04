import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const currencySymbol = currency === '£' ? '£' : currency === '€' ? '€' : currency === '₹' ? '₹' : '$';
    const totalExpenses = expenses.reduce((total, item) => {

        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currencySymbol} {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
