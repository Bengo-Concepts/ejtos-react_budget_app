
import '../components/component.css';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS file


const CurrencyDropdown = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
    });
  };

  return (
    <div className="currency-dropdown-container">
    <select className="form-control" value={currency} onChange={handleCurrencyChange}>
      <option value="£">£ - Pound</option>
      <option value="$">$ - Dollar</option>
      <option value="€">€ - Euro</option>
      <option value="₹">₹ - Ruppee</option>
    </select>
    </div>
  );
};

export default CurrencyDropdown;
