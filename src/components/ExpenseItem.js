import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {FaMinusCircle} from 'react-icons/fa';
import {FaPlusCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const currencySymbol = currency === '£' ? '£' : currency === '€' ? '€' : currency === '₹' ? '₹' : '$';

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currencySymbol}{props.cost}</td>
      <td><FaPlusCircle size='2.2em' color="green" onClick={(event) => decreaseAllocation(props.name)}></FaPlusCircle></td>
      <td><FaMinusCircle size='2.2em' color="red" onClick={(event) => increaseAllocation(props.name)}></FaMinusCircle></td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;


