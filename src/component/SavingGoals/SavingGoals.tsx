import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { PriorityEnum } from '../../models/enums';
import { SavingGoalModel } from '../../models/SavingGoalModel';
import { TextResources } from '../Expenses';
import AddSavingGoalForm from './AddSavingGoalForm';
import SavingGoal from './SavingGoal/SavingGoal';
import './SavingGoals.css';

const SavingGoals = (props: any) => {
  const DUMMY_GOALS: SavingGoalModel[] = [
    {
      id: 1,
      name: 'Cycling pants',
      amount: 40,
      priority: PriorityEnum.Medium,
    },
    {
      id: 2,
      name: 'Cycling pants',
      amount: 40,
      priority: PriorityEnum.Medium,
    },
    {
      id: 3,
      name: 'Cycling pants',
      amount: 40,
      priority: PriorityEnum.Medium,
    },
  ];

  const [goals, setGoals] = useState(DUMMY_GOALS);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewSavingGoal = (newGoal: any) => {
    setGoals(prevState => {
      return [ ...prevState, {...newGoal, id: goals.length + 1}]
    })
    handleClose();
    
  };


  return (
    <div className='saving-goals'>
      <div className='saving-goals__header'>
        <h3>{TextResources.savingGoalsTitle}</h3>
        <button data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
          {TextResources.addSavingGoalButton}
        </button>
      </div>
      <div className='saving-goals__header-bar'>
        <p>{TextResources.savingGoalName}</p>
        <p>{TextResources.savingGoalAmount}</p>
        <p>{TextResources.savingGoalPriority}</p>
      </div>
      <div className='saving-goals-list'>
        {goals.map((g) => (
          <SavingGoal item={g} key={g.id} />
        ))}
      </div>
      <Modal show={show} centered onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{TextResources.addSavingGoalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddSavingGoalForm onHandleClose={handleClose} addNewSavingGoal={addNewSavingGoal} />
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default SavingGoals;
