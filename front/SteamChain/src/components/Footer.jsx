const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    textAlign: 'center',
  };

  function InputField(props) {
    return (
      <footer style={footerStyle}>{props.children}</footer>
  
    );
  }
  
  export default InputField;