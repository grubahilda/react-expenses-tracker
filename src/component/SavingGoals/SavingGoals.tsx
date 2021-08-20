import { PriorityEnum } from '../../models/enums';
import { SavingGoalModel } from '../../models/SavingGoalModel';
import { TextResources } from '../Expenses';
import SavingGoal from './SavingGoal/SavingGoal';
import './SavingGoals.css';

const SavingGoals = (props: any) => {  
  const goals: SavingGoalModel[] = [
    {
      id: 1, name: 'Cycling pants', amount: 40, priority: PriorityEnum.Medium
    },
    {
      id: 2, name: 'Cycling pants', amount: 40, priority: PriorityEnum.Medium
    },
    {
      id: 3, name: 'Cycling pants', amount: 40, priority: PriorityEnum.Medium
    },
  ]


  return (
    <div className='saving-goals'>
      <div className='saving-goals__header'>
        <h3>{TextResources.savingGoalsTitle}</h3>
        <button>{TextResources.addSavingGoalButton}</button>
      </div>
        <div className="saving-goals__header-bar">
          <p>{TextResources.savingGoalName}</p>
          <p>{TextResources.savingGoalAmount}</p>
          <p>{TextResources.savingGoalPriority}</p>
        </div>
        <div className="saving-goals-list">
          { goals.map(g => <SavingGoal item={g} key={g.id} />)}
        </div>
    </div>
  );
};

export default SavingGoals;
