import { TextResources } from '..';
import { DateService } from '../../../helpers/date-helper';
import './ExpenseFilter.css';

const ExpensesFilter = (props: any) => {
  const onYearChangeHandler = (event: any) => {
    props.onFilterChange(+event.target.value);
  };

  const startYear = 2018;
  const currentYear = DateService.todayAsDate().getFullYear();
  const years: number[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  const options = years.reverse().map(y => {
    return <option key={y} value={y}>{y}</option>
  })

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>{TextResources.filterLabel}</label>
        <select value={props.selected} onChange={onYearChangeHandler}>
          <option key='0' value='0'>{TextResources.all}</option>
          {options}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
