import { useState } from 'react';
import { TextResources } from '../../../TextResources';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense(props: any) {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = { ...enteredExpenseData, id: props.nrExpenses + 1 };
    props.onAddNewExpense(expenseData);
  };

  const clickHandler = () => {
    setShowForm(true);
  };

  const cancelButtonHandler = () => {
    setShowForm(false);
  };

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButton={cancelButtonHandler}
        />
      ) : (
        <button onClick={clickHandler}>{TextResources.showFormButton}</button>
      )}
    </div>
  );
}

export default NewExpense;
