import './SavingGoal.css';

const SavingGoal = (props: any) => {  


  return (
    <div className="goal-item">
        <p>{props.item.name}</p>
        <p>{props.item.amount}</p>
        <p>{props.item.priority}</p>
    </div>
  );
};

export default SavingGoal;
