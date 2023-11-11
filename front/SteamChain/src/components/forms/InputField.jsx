import React from 'react';

const containerStyle = {

  borderRadius: '2px',
  border: '1px solid #000000',
  color: '#000000',
  padding: '10px',
  backgroundColor: '#FFFFFF',
  outline: 'none',
  width: '80%',
  fontSize: '15px',
  border: '2px solid #000000',
};

function InputField(props) {
  return (
    <div>
      <p>{props.label}</p>
      <input style={containerStyle}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>


  );
}

export default InputField;