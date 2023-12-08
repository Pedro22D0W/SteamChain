import  './Style/ButtonStyle.css';

function Button(props) {

  return (
    <div>
      <button className="button-52" role="button" onClick={props.onClick} >
        {props.children}
      </button>
    </div>
  );
}

export default Button;