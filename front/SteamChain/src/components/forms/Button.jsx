import React, { useState } from 'react';
import button from './button.css';



function Button(props) {

  return (
    <div>
      <button
        class="button-52" role="button"
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;