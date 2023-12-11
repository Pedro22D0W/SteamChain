import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const contentStyle = {
  flex: 1, // Faz com que o conteúdo ocupe o espaço disponível
  padding: '20px', // Adapte conforme necessário
};

function App() {
  const [hasToken, setHasToken] = useState(!!localStorage.getItem('token'));
  const location = useLocation();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      setHasToken(!!token);
    };

    checkToken();
  }, [location.pathname]);
  

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',

  };

    return (
      
      <div style={containerStyle}>

        {localStorage.getItem('token') && <Header />}

        <div id="root" style={contentStyle}>
          <Outlet />
        </div>
        
      </div>
    );
  }
  

export default App
