import InputFieldStyle from './Style/InputFieldStyle.css';

function InputField(props) {
  return (
    <div >
      <p>{props.label}</p>
      <input className="InputField" 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>


  );
}

export default InputField;