import { TextResources } from '.';
import { PriorityEnum } from '../../models/enums';

const AddSavingGoalForm = (props: any) => {  


  return (
    <div >
        <div className='new-expense__control'>
          <label>{TextResources.savingGoalName}</label>
          <input
            type='text'
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>{TextResources.amountLabel}</label>
          <input
            type='number'
          ></input>
        </div>
        <div className='new-expense__control'>
          <label>{TextResources.savingGoalPriority}</label>
          <select>
          
          </select>
        </div>
    </div>
  );
};

export default AddSavingGoalForm;
