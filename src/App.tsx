import { useState } from 'react';
import { ExpenseItemModel } from './component/Expenses/ExpenseItem/ExpenseItemModel';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/Expenses/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Car insurance',
    amount: 1200,
    date: '11-12-2021',
  },
  {
    id: 2,
    title: 'New pillows',
    amount: 40,
    date: '1-02-2019',
  },
] as ExpenseItemModel[];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addNewExpenseHandler = (newExpense: ExpenseItemModel) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense
        onAddNewExpense={addNewExpenseHandler}
        nrExpenses={expenses.length}
      />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
