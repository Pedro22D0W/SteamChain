import ethereum from '../../assets/ethereum.svg';
import { Link } from 'react-router-dom';
import PriceFieldStyle from './Style/PriceFieldStyle.css';

function PriceField(props) {
    const id = props.id;

  return (
    <div>
        <div className='price-field-container'>
            <a className='value-field' 
            >{props.price}<img src={ethereum} alt="gaming_1" style={{maxWidth: '10px',
            margin: '0 5px 0 '}} /></a>
            <button className='price-field-button'><Link to = {"/gamedetails/1"}>Comprar</Link></button>
        </div>
    </div>

  );
}

export default PriceField;

