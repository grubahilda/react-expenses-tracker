import { useState } from 'react';
import { DateService } from '../../helpers/date-helper';
import { TextResources } from '../../TextResources';
import ExpenseChart from './ExpenseChart/ExpenseChart';
import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseItem from './ExpenseItem/ExpenseItem';
import { ExpenseItemModel } from '../../models/ExpenseItemModel';
import './Expenses.css';

function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState(0);

  const filterChangeHandler = (filterYearValue: any) => {
    setFilteredYear(filterYearValue);
  };

  const filteredItems: ExpenseItemModel[] = props.items.filter(
    (e: ExpenseItemModel) =>
      {
        if (filteredYear !== 0) {
          return DateService.convertStringToDateObject(e.date).getFullYear() ===
        filteredYear
        } else {
          return props.items;
        }
    }
    
    );

  const displayItems =
    filteredItems.length === 0 ? (
      <p className='no-results'>{TextResources.noExpenses}</p>
    ) : (
      filteredItems.map((e: ExpenseItemModel) => {
        return (
          <ExpenseItem
            id={e.id}
            title={e.title}
            date={e.date}
            amount={e.amount}
            key={e.id}
          />
        );
      })
    );

  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredItems} />
      {displayItems}
    </div>
  );
}

export default Expenses;
