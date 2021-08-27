import './Input.css'

const Input = (props: any) => {
  // component inputs:
  // labelText
  // initialValidation
  // isInputValid

  return (
    <div className='control'>
      <label>{props.labelText}</label>
      <input
        className={`${props.initialValidation && !props.isInputValid ? 'invalid' : null}`}
        onChange={props.handleInputChange}
        type={props.type}
      ></input>
      {props.initialValidation && !props.isInputValid && (
        <span>This field is required</span>
      )}
    </div>
  );
};

export default Input;
