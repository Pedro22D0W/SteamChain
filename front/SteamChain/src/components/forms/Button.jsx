import button from './Style/ButtonStyle.css';

function Button(props) {

  return (
    <div>
      <button className="button-52" role="button">
        {props.children}
      </button>
    </div>
  );
}

export default Button;