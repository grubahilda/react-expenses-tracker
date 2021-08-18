import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense(props: any) {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = { ...enteredExpenseData, id: props.nrExpenses + 1 };
    props.onAddNewExpense(expenseData);
    // console.log(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
