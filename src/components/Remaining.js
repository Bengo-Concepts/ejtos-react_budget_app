import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Remaining = (props) => {
    const { expenses, budget, currency } = useContext(AppContext);
    const currencySymbol = currency === '£' ? '£' : currency === '€' ? '€' : currency === '₹' ? '₹' : '$';
    const totalExpenses = expenses.reduce((total, item) => {
        
       
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currencySymbol} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
