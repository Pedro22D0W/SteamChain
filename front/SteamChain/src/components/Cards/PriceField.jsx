import ethereum from '../../assets/ethereum.svg';
import { Link } from 'react-router-dom';
import './Style/PriceFieldStyle.css';
import { useLocation } from 'react-router-dom';


function PriceField(props) {
    const id = props.id;
    const location = useLocation();
    console.log(location.pathname);
  return (
    <div>
      {location.pathname ==="/developer" && (
        <div className='price-field-container'>
            <a className='value-field' 
            >{props.price}<img src={ethereum} alt="gaming_1" style={{minWidth: '2vh',
            margin: '0 1px 0 '}} /></a>  
            <button className='price-field-button'><Link to = {`/gamedetails/${id}`}>Detalhes</Link></button>
        </div>
      )}
    </div>

  );
}

export default PriceField;

