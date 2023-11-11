import React from 'react';
import { Link } from 'react-router-dom';
import CardCenter from '../components/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
import gaming_1 from '../assets/gaming_1.svg';
const Login = () => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',

  };
  const imageStyle = {
    pading: '100px',
    maxWidth: '100%', // Adiciona uma largura máxima para a imagem
    maxHeight: '110vh', // Adiciona uma altura máxima para a imagem
  };

  return (
    
      
    <div style={containerStyle}>
          
          <img src={gaming_1} alt="gaming_1" style={imageStyle} />

      
      <CardCenter >
        <InputField label="Nome de Usuario" type="text" placeholder="Username" />
        <InputField label="Senha" type="password" placeholder="Password" />
        <div style={{ display: 'flex', flexDirection: 'row' }}><Button>Entrar</Button> <Button> <Link style={{color: '#FFFFFF'}}to="/register">Registrar</Link></Button></div>

        
      </CardCenter> 

      
        </div>
    
  );
}

export default Login;