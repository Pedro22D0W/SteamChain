import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/CardCenter';
import Button from '../components/forms/Button';
import { Link } from 'react-router-dom';
import TabContainer from '../components/Tabs';
import GameCard from '../components/GameCard';






const DeveloperHome = () => {
  const [user, setUser] = useState(null);
  const [Games, setGames] = useState(null);

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

  const FindGames = async () => {
    try {

      const response = await fetch('http://localhost:8080/games/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {

        const Games = await response.json();
        setGames(Games);
        console.log(Games);

      } else {
        console.error('Erro ao obter dados do banco:', response.status);
      }
    } catch (error) {
      console.error('Erro ao obter dados do banco:', token);
    }
  };

  

  const [aba, setAba] = useState(1);

  const ChangeAba = (aba) => {
    setAba(aba);
  };

  // Use o useEffect para chamar a função quando o componente for montado
  useEffect(() => {
    obterDadosDoBanco();
    FindGames();
  }, []);

  const tabStyle = {
    fontSize: '16px',
    fontWeight: '200',
    letterSpacing: '1px',
    padding: '13px 20px 13px',
    outline: '0',
    border: '1px solid black',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: '#a482f3',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
  };

  return (
    <div className="App">

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div>
          <button onClick={() => ChangeAba(1)} style={tabStyle}>
            COMPRADOS</button>
        </div>
        <div>
          <button onClick={() => ChangeAba(2)} style={tabStyle}>
            PUBLICADOS</button>
        </div>
        <div>
          <button onClick={() => ChangeAba(3)} style={tabStyle}>
            LOJA</button>
        </div>

      </div>

      <CardCenter style={{ margin: '100px ', }}>
        {aba === 1 && (
          <div>
            <GameCard image = "https://cdn1.epicgames.com/spt-assets/2d4f1465e9254425b5b03c8a429d4d9b/oirbo-ffbg6.png?h=480&quality=medium&resize=1&w=360" price ='0.001' />
          </div>

        )}

        {aba === 2 && (
          <div>
          <h1>{user?.username}!</h1>
          {user?.password}
          {user?.email}
          <Button><Link style={{ color: '#FFFFFF' }} to="/gameregister">Adicionar Jogo +</Link></Button>
        </div>
        )}

        {aba === 3 && (
          <div>
            <h1>LOJA</h1>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {Games?.map((game) => (
              <GameCard {...game} />
            ))}
            </div>
            
            
          </div>
          
        )}




      </CardCenter>






    </div>
  );
};

export default DeveloperHome;