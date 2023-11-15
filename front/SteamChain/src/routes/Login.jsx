import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import CardCenter from '../components/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
import gaming_1 from '../assets/gaming_1.svg';
import { useState } from 'react';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  console.log(email, password);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Origin': 'http://localhost:5173', },
        
        body: JSON.stringify({
             email:email, 
             password:password
            })      
      });
      
      const token = await response.json();
      localStorage.setItem('token', token.token);
      return Navigate('/developer');

    } catch (error) {
        console.error(error);
      }
    }

    const handleLoginSuccess = (userDetails) => {
      // Lógica para processar os dados do usuário...
    
      // Redirecionar com base nas informações do usuário
      if (userDetails.role === 'ADMIN') {
        history.push('/admin-dashboard');
      } else if (userDetails.role === 'USER') {
        history.push('/user-dashboard');
      } else {
        console.error('Tipo de usuário desconhecido');
      }
    };
  
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

        
      <form onSubmit={handleSubmit}>
                    <div>
                        <InputField 
                        label="Email" 
                        type="text" 
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                    <InputField 
                    label="Senha" 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  />
                    </div>

                    

                    <div style={{ display: 'flex', flexDirection: 'row' }}><Button onClick={()=> handleLoginSuccess()}>Entrar</Button> <Button> <Link style={{color: '#FFFFFF'}}to="/register">Registrar</Link></Button></div>
                </form>

        
      </CardCenter> 

      
        </div>
    
  );
}

export default Login;