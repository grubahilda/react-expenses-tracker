import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import { ExpenseItemModel } from './ExpenseItem/ExpenseItemModel';
import './Expenses.css';

function Expenses(props: any) {
  const onFilterChangeHandler = (filterYearValue: string) => {
    // TODO
  };

  const items: any[] = [];

  props.items.map((e: ExpenseItemModel, i: number) => {
    return items.push(
      <ExpenseItem
        id={e.id}
        title={e.title}
        date={e.date}
        amount={e.amount}
        key={i}
      />
    );
  });

  return (
    <div className='expenses'>
      <ExpensesFilter onFilterChange={onFilterChangeHandler} />
      {items}
    </div>
  );
}

export default Expenses;
