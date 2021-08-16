import ExpenseItem from './ExpenseItem/ExpenseItem';
import { ExpenseItemModel } from './ExpenseItem/ExpenseItemModel';
import './Expenses.css';

function Expenses() {
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

  const items: any[] = [];

  for (const e of expenses) {
    items.push(
      <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
    );
  }

  return <div className='expenses'>{items}</div>;
}

export default Expenses;
