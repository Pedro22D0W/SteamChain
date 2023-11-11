import React from 'react';


const cardStyle = {
    boxShadow: 'rgba(148,0,211, 0.4) 5px 5px, rgba(148,0,211, 0.3) 10px 10px, rgba(148,0,211, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
    display: 'flex',
    background: '255, 255, 255, 1',
    flexDirection: 'column',
    padding: '1px 32px 24px ',
    minWidth: '80vh',
    fontSize: '16px',
    letterSpacing: '2px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#000',
    cursor: 'pointer',
    border: '1px solid',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    margin: '10px ',
};

const CardCenter = (props) => {
    return (
        <div style={cardStyle}>

            {props.children}

        </div>
    );
}

export default CardCenter;