import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/CardCenter';
import Button from '../components/forms/Button';
import { Link } from 'react-router-dom';
import TabContainer from '../components/Tabs';
import GameCard from '../components/GameCard';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';




const GameDetails = (props) => {
    const { id } = useParams();
    const [Game, setGames] = useState(null);
    const FindGame = async () => {
        try {
    
          const response = await fetch(`http://localhost:8080/games/getdetails/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
    
            const Game = await response.json();
            setGames(Game);
            console.log(Game);
    
          } else {
            console.error('Erro ao obter dados do banco:', response.status);
          }
        } catch (error) {
          console.error('Erro ao obter dados do banco:', token);
          con
        }
      };
    

    // Use o useEffect para chamar a função quando o componente for montado
    useEffect(() => {
        FindGame();
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
        margin: '10px',
    };

    const buttonStyle = {
        alignItems: 'center',
        backgroundColor: '#06f',
        border: '2px solid #06f',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        fill: '#000',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        height: '48px',
        justifyContent: 'center',
        letterSpacing: '-.8px',
        lineHeight: '24px',
        minWidth: '140px',
        outline: '0',
        padding: '0 17px',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all .3s',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
      };

    return (
        <div className="App">



            <CardCenter>

                <div style={{ display: 'flex', flexDirection: ' column', padding: '8vh', margin: " 0 20vh 0 ", alignContent: "center" }} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignContent: "center", margin:"0 0 5vh 0" }}>

                        <div style = {{ display: 'flex', flexDirection: ' column', }}>
                            <GameCard image={Game?.poster} />
                           
                            <Button> Comprar </Button>
                            
                           
                        </div>      

                        <div sytle = {{ margin:"20vh" }}>
                            <ReactPlayer
                                url={Game?.trailer}
                                width='220%'
                                height='105%'
                                margin='0 0 0 0'
                                controls={true} // Adicione essa propriedade se quiser exibir controles de reprodução
                            />
                        </div>

                    </div> 
                    <div sytle = {{ margin:"20vh 0 0 0" }}>

                    
                    <CardCenter>
                    <div style={{ display: 'flex', flexDirection: ' column', padding: '8vh',maxHeight: "20vn"}}>
                        <h1>{Game?.name}</h1>
                        <a>{Game?.about}</a>
                        
                        
                    </div>
                   </CardCenter>
                   </div>
                </div>









            </CardCenter>






        </div>
    );
};

export default GameDetails;