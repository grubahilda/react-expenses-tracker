import { DateService } from '../../../helpers/date-helper';
import Chart from '../../Chart/Chart';
import { DataPointsModel } from '../../Chart/ChartBar/DataPointsModel';
import { ExpenseItemModel } from '../ExpenseItem/ExpenseItemModel';

const ExpenseChart = (props: any) => {
  const chartDataPoints: DataPointsModel[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  props.expenses.forEach((expense: ExpenseItemModel) => {
    const expenseMonth = DateService.convertStringToDateObject(
      expense.date
    ).getMonth();

    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
