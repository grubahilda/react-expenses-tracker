import './Chart.css';
import ChartBar from './ChartBar/ChartBar';
import { DataPointsModel } from './ChartBar/DataPointsModel';

const Chart = (props: any) => {  
    const dataPointValues = (props.dataPoints as DataPointsModel[]).map((d: any) => d.value);
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {(props.dataPoints as DataPointsModel[]).map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
