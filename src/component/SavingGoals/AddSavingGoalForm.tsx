import { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TextResources } from '.';
import { PriorityEnum } from '../../models/enums';
import Input from '../UI/Input';

const AddSavingGoalForm = (props: any) => {
  const [nameInput, setNameInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [priorityInput, setPriorityInput] = useState(
    TextResources.defaultPriority
  );
  const [userInput, setUserInput] = useState({
    title: '',
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

    nameInput.trim().length === 0
      ? setIsNameValid(false)
      : setIsNameValid(true);
    amountInput.trim().length === 0
      ? setIsAmountValid(false)
      : setIsAmountValid(true);
    priorityInput === TextResources.defaultPriority
      ? setIsPriorityValid(false)
      : setIsPriorityValid(true);

    if (isNameValid && isAmountValid && isPriorityValid)
      props.addNewSavingGoal(userInput);
    // TODO double click needed, workaround?
  };

  const removeDefaultOption = (event: ChangeEvent<HTMLSelectElement>) => {
    document.getElementById('default-priority-option')?.remove();
    setPriorityInput(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        priority: event.target.value,
      };
    });
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountInput(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
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
        <div className='saving-goal__control'>
          <label>{TextResources.savingGoalName}</label>
          <select
            style={{
              borderColor: initialValidation && !isNameValid ? 'red' : 'black',
            }}
            onChange={removeDefaultOption}
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
      </form>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHandleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default AddSavingGoalForm;
