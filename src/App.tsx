import { ExpenseItemModel } from './component/Expenses/ExpenseItem/ExpenseItemModel';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/Expenses/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      title: 'Car insurance',
      amount: 1200,
      date: '11-12-2021',
    },
    {
      title: 'Car insurance',
      amount: 1200,
      date: '1-02-2019',
    },
  ] as ExpenseItemModel[];

  const addNewExpenseHandler = (newExpense: ExpenseItemModel) => {
    expenses.push(newExpense);
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
