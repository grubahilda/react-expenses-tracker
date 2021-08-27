import { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TextResources } from '.';
import { PriorityEnum } from '../../models/enums';
import Input from '../UI/Input';

const AddSavingGoalForm = (props: any) => {
  const [userInput, setUserInput] = useState({
    name: '',
    amount: '',
    priority: '',
  });
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(false);
  const [isPriorityValid, setIsPriorityValid] = useState(false);
  const [initialValidation, setInitialValidation] = useState(false);

  const items = Object.values(PriorityEnum).map((key) => {
    return (
      <option key={key} value={PriorityEnum[key]}>
        {key}
      </option>
    );
  });

  const handleSubmit = (event: React.SyntheticEvent) => {
    setInitialValidation(true);
    event.preventDefault();

    userInput.name.trim().length === 0
      ? setIsNameValid(false)
      : setIsNameValid(true);
    userInput.amount.trim().length === 0
      ? setIsAmountValid(false)
      : setIsAmountValid(true);
    userInput.priority.length === 0
      ? setIsPriorityValid(false)
      : setIsPriorityValid(true);

    if (isNameValid && isAmountValid && isPriorityValid)
      props.addNewSavingGoal(userInput);
  };

  const removeDefaultOption = () => {
    document.getElementById('default-priority-option')?.remove();
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });

    event.target.value.trim().length === 0
      ? setIsNameValid(false)
      : setIsNameValid(true);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
    event.target.value.trim().length > 0
      ? setIsAmountValid(true)
      : setIsAmountValid(false);
  };

  const handlePriorityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    removeDefaultOption();
    setUserInput((prevState) => {
      return {
        ...prevState,
        priority: event.target.value,
      };
    });
    event.target.value.length === 0
      ? setIsPriorityValid(false)
      : setIsPriorityValid(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          labelText={TextResources.savingGoalName}
          type='text'
          initialValidation={initialValidation}
          isInputValid={isNameValid}
          handleInputChange={handleNameChange}
        />
        <Input
          labelText={TextResources.savingGoalAmount}
          type='number'
          initialValidation={initialValidation}
          isInputValid={isAmountValid}
          handleInputChange={handleAmountChange}
        />
        <div className='control'>
          <label>{TextResources.savingGoalName}</label>
          <select
            className={`${initialValidation && !isPriorityValid ? 'invalid' : null}`}
            onChange={handlePriorityChange}
          >
            <option id='default-priority-option'>
              {TextResources.defaultPriority}
            </option>
            {items}
          </select>
          {initialValidation && !isPriorityValid && (
            <span>This field is required</span>
          )}
        </div>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.onHandleClose}>
            Close
          </Button>
          <Button variant='primary' type='submit'>
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
};

export default AddSavingGoalForm;
