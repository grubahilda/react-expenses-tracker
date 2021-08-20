import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PriorityEnum } from '../../models/enums';
import { SavingGoalModel } from '../../models/SavingGoalModel';
import { TextResources } from '../Expenses';
import AddSavingGoalForm from './AddSavingGoalForm';
import SavingGoal from './SavingGoal/SavingGoal';
import './SavingGoals.css';

const SavingGoals = (props: any) => {
  const goals: SavingGoalModel[] = [
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddSavingGoalForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default SavingGoals;
