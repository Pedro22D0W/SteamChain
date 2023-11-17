import React, { useState } from 'react';
import Button from './forms/Button';

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
            COMPRADOS
        </button>
        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
          PUBLICADOS
        </button>
        <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
          LOJA
        </button>
        
        <Button>hOME</Button>
      </div>
     
    </div>
  );
};

const TabContent = ({ content }) => {
  return <div>{content}</div>;
};

export default TabContainer;