
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/Cards/CardCenter';
import Button from '../components/forms/Button';
import { Link } from 'react-router-dom';
import GameCard from '../components/Cards/GameCard';
import { getGames, getUser, getUserGames } from '../Service/DataService.js';
import './Style/DeveloperHomeStyle.css';


const DeveloperHome = () => {
  const [user, setUser] = useState(null);
  const [Games, setGames] = useState(null);
  const [UserGames, setUserGames] = useState(null);
  const [PublishedGames, setPublishedGames] = useState(null);

  const FindUser = async () => {
    try {
      const response = await getUser(localStorage.getItem('token'));
      setUser(response);
      localStorage.setItem('userId', response.id);
    }
    catch (error) {
      console.error('Erro ao obter dados do banco:');
    }
  }

  const FindGames = async () => {
    try {
      const response = await getGames();
      setGames(response);
    }
    catch (error) {
      console.error('Erro ao encorar os jogos:');
    }
  }

  const FindUserGames = async () => {
    try {
      const response = await getUserGames(localStorage.getItem('token'));
      setUserGames(response);
    }
    catch (error) {
      console.error('Erro ao obter dados do banco:');
    }
  }

  const FindPublishedGames = async () => {
    try {
      const response = await getUserGames(localStorage.getItem('token'));
      setPublishedGames(response);
      console.log(response);
    }
    catch (error) {
      console.error('Erro ao obter dados do banco:');
    }
  }

  const [aba, setAba] = useState(1);

  const ChangeAba = (aba) => {
    setAba(aba);
  };

  // Use o useEffect para chamar a função quando o componente for montado
  useEffect(() => {
    FindUser();
    FindUserGames();
    FindPublishedGames();
    FindGames();
  }, []);

  return (
    <div className="App">

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div>
          <button className='tab-style' onClick={() => ChangeAba(1)}>
            COMPRADOS</button>
        </div>
        <div>
          <button className='tab-style' onClick={() => ChangeAba(2)}>
            PUBLICADOS</button>
        </div>
        <div>
          <button className='tab-style' onClick={() => ChangeAba(3)}>
            LOJA</button>
        </div>

      </div>

      <CardCenter style={{ margin: '100px ', }}>
        {aba === 1 && (
          <div className='grid-list'>
            {UserGames?.map((game) => (
              <GameCard key={game.id} image={game?.poster} {...game} />
            ))}
          </div>

        )}

        {aba === 2 && (
          <div>
            <div>
              <h1>{user?.username}!</h1>
              {user?.password}
              {user?.email}
              <Button><Link style={{ color: '#FFFFFF' }} to="/gameregister">Adicionar Jogo +</Link></Button>
            </div>
            <div className='grid-list'>
              {UserGames?.map((game) =>
                // Verifica se o user_id do jogo é igual ao user_id desejado
                
                  <GameCard key={game.id} image={game?.poster} {...game} />
                
              )}
            </div>
          </div>

        )}

        {aba === 3 && (
          <div>
            <h1>LOJA!</h1>

            <div className='grid-list'>
              {Games?.map((game) => (
                <GameCard image={game?.poster} {...game} />
              ))}
            </div>


          </div>

        )}




      </CardCenter>






    </div>
  );
};

export default DeveloperHome;