import React, { useState } from 'react';


const buttonStyle = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '16px',
  letterSpacing: '2px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: '#000',
  cursor: 'pointer',
  border: '3px solid',
  padding: '0.25em 0.5em',
  boxShadow: '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
  position: 'relative',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  margin: '10px',
};

const buttonActiveStyle = {
  boxShadow: '0px 0px 0px 0px',
  top: '5px',
  left: '5px',
};

function Button(props) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(true);
  };

  const handleInactive = () => {
    setActive(false);
  };

  return (
    <div>
      <button
        style={{ ...buttonStyle, ...(active ? buttonActiveStyle : {}) }}
        onMouseDown={handleActive}
        onMouseUp={handleInactive}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;