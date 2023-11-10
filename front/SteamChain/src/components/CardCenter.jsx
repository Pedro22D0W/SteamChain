import React from 'react';


const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    height: '40%',
    padding: '1px 32px 24px 32px',
    minWidth: '636px',
    backgroundImage: 'radial-gradient(circle, #ffffff, #fafafa, #f4f4f4, #efefef, #eaeaea)',
    fontSize: '16px',
    letterSpacing: '2px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#000',
    cursor: 'pointer',
    border: '3px solid',
    boxShadow: '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    margin: '10px',
};

const CardCenter = (props) => {
    return (
        <div style={cardStyle}>

            {props.children}

        </div>
    );
}

export default CardCenter;