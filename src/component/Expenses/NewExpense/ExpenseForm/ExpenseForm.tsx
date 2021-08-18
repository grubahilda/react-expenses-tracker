import { useState } from 'react';
import { TextResources } from '../..';
import './ExpenseForm.css';

const separator = '-';

function ExpenseForm(props: any) {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const date = userInput.date.split(separator);

    props.onSaveExpenseData({...userInput, amount: +userInput.amount, date: `${date[2]}${separator}${date[1]}${separator}${date[0]}`,});

    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>{TextResources.titleLabel}</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>{TextResources.amountLabel}</label>
          <input
            type='number'
            onChange={amountChangeHandler}
            min='0.01'
            step='0.01'
            value={userInput.amount}
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>{TextResources.dateLabel}</label>
          <input
            type='date'
            onChange={dateChangeHandler}
            min='2019-01-01'
            value={userInput.date}
          ></input>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>{TextResources.addExpenseButton}</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
