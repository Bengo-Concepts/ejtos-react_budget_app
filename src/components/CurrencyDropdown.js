
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
    <select className="custom-dropdown custom-select" value={currency} onChange={handleCurrencyChange}>
          <option className=" Dollar" value="$">$ - Dollar</option>
          <option className=" Pound" value="£">£ - Pound</option>
          <option className=" Euro" value="€">€ - Euro</option>
          <option className=" Rupee"value="₹">₹ - Rupee</option>
    </select>
    </div>
  );
};
export default CurrencyDropdown;
