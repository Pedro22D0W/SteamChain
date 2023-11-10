import React from 'react';
import { Link } from 'react-router-dom';
import CardCenter from '../components/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
const Login = () => {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div className="App" style={containerStyle}>
      <CardCenter >
        <InputField label="Nome de Usuario" type="text" placeholder="Username" />
        <InputField label="Senha" type="password" placeholder="Password" />
        <div style={{ display: 'flex', flexDirection: 'row' }}><Button>Entrar</Button> <Button> <Link to="/register">Registrar</Link></Button></div>
        
      </CardCenter> 
      
    </div>
    
  );
}

export default Login;