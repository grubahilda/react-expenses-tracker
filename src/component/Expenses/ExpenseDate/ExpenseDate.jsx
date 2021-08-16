import './ExpenseDate.css'
import { DateService } from '../../../helpers/date-helper';

function ExpenseDate(props) {
  const date = DateService.convertStringToDateObject(props.date);

  return (
    <div className="expense-date">
      <div className="expense-date__day">{date.toLocaleDateString('es-US', { day: '2-digit' })}</div>
      <div className="expense-date__month">{date.toLocaleDateString('en-US', { month: 'long' })}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
