import ethereum from '../assets/ethereum.svg';

function PriceField(props) {

    const tabStyle = {
        fontSize: '16px',
        fontWeight: '200',
        letterSpacing: '1px',
        padding: '5px',
        outline: '0',
        border: '0px',
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: '#a482f3',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
    
    };

  return (
    <div style={{
        display: 'flex',
        background: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row',
    }}>
    
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            top: '90%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
        }}>
            <a style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgba(250,250,250,0.5)',
                fontSize: '16px',
                fontWeight: '500',
                fontcolor: '#000',
                letterSpacing: '1px',
                padding: '5px',
                outline: '0',
            }}>{props.price}<img src={ethereum} alt="gaming_1" style={{maxWidth: '10px',
            margin: '0 5px 0 '}} /></a>
            <button style={tabStyle}>comprar</button>
        </div>
    </div>

  );
}

export default PriceField;

