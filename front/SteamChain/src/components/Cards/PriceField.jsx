import ethereum from '../../assets/ethereum.svg';
import { Link } from 'react-router-dom';
import './Style/PriceFieldStyle.css';

function PriceField(props) {
    const id = props.id;

  return (
    <div>
        <div className='price-field-container'>
            <a className='value-field' 
            >{props.price}<img src={ethereum} alt="gaming_1" style={{minWidth: '2vh',
            margin: '0 px 0 '}} /></a>  
            <button className='price-field-button'><Link to = {`/gamedetails/${id}`}>Comprar</Link></button>
        </div>
        
    </div>

  );
}

export default PriceField;

