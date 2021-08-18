import { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import { TextResources } from '..';
import './ExpenseItem.css';
import { ExpenseItemModel } from './ExpenseItemModel';

function ExpenseItem(props: ExpenseItemModel) {
  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('New title');
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>{TextResources.updateButton}</button>
    </div>
  );
}

export default ExpenseItem;
