import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/CardCenter';
import Button from '../components/forms/Button';
import { Link } from 'react-router-dom';



  


const DeveloperHome = () => {
  const [user, setUser] = useState(null);

    const obterDadosDoBanco = async () => {
        
        const token = localStorage.getItem('token');
    
        try {

          const response = await fetch('http://localhost:8080/user/developer', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            
            const userData = await response.json();
            localStorage.setItem('username', userData.username);
            setUser(userData);
            
          } else {
            console.error('Erro ao obter dados do banco:', response.status);
          }
        } catch (error) {
          console.error('Erro ao obter dados do banco:', token);
        }
      };
    
      // Use o useEffect para chamar a função quando o componente for montado
      useEffect(() => {
        obterDadosDoBanco();
      }, []); 

    

    return (
      <div className="App">
  
        <CardCenter> <h1>{user?.username}!</h1>
          {user?.password}
          {user?.email}
          <Button><Link style={{color: '#FFFFFF'}}to="/register">Adicionar Jogo +</Link></Button>
          </CardCenter>
          
         
      
        
     
      
    </div>
  );
};

export default DeveloperHome;