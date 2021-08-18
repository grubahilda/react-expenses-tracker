import { ReactElement, useState } from 'react';
import { DateService } from '../../helpers/date-helper';
import { TextResources } from '../../TextResources';
import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import { ExpenseItemModel } from './ExpenseItem/ExpenseItemModel';
import './Expenses.css';

function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState(
    DateService.todayAsDate().getFullYear()
  );

  const filterChangeHandler = (filterYearValue: number) => {
    setFilteredYear(filterYearValue);
  };

  const filteredItems: ExpenseItemModel[] = props.items.filter(
    (e: ExpenseItemModel) =>
      DateService.convertStringToDateObject(e.date).getFullYear() ===
      filteredYear
  );

  const displayItems = filteredItems.length === 0 ? (
    <p className='no-results'>{TextResources.noExpenses}</p>
  ) : 
    filteredItems.map((e: ExpenseItemModel) => {
      return <ExpenseItem
        id={e.id}
        title={e.title}
        date={e.date}
        amount={e.amount}
        key={e.id}
      />;
    }
  )

  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {displayItems}
    </div>
  );
}

export default Expenses;
