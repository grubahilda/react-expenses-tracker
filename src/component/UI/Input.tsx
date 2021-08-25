
const Input = (props: any) => {
  // component inputs:
  // labelText
  // initialValidation
  // isInputValid

  return (
    <div className='saving-goal__control'>
      <label>{props.labelText}</label>
      <input
        style={{
          borderColor:
            props.initialValidation && !props.isInputValid ? 'red' : 'black',
        }}
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
