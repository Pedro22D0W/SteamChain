import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/Cards/CardCenter';
import Button from '../components/forms/Button';
import GameCard from '../components/Cards/GameCard';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { getGameDetails } from '../Service/DataService.js';
import { buy } from '../Service/StoreService.js';
import { Link, useNavigate } from "react-router-dom";
import { verify } from '../Service/StoreService.js';


const GameDetails = (props) => {
    
    const Navigate = useNavigate();
    const { id } = useParams();
    const [Game, setGame] = useState(null);
    const [userHasGame, setUserHasGame] = useState(false);

    const getDetails = async () => {
      try {
        const gameData = await getGameDetails(id);
        setGame(gameData);

      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    const buyGame = async () => {
        try {
            const response = await buy(id, localStorage.getItem('userId'));
            if (response) {
                return Navigate('/developer');
            }
        } catch (error) {
            console.error("Erro ao efetuar a compra:", error);
        }
    }
    const HasGame = async () => {
        try {
            const response = await verify(localStorage.getItem('userId'),id);
            if (response) {
                setUserHasGame(true);
            }
        } catch (error) {
            console.error("Erro ao verificar se o usuário possui o jogo:", error);
        }
    }

    useEffect(() => {
       getDetails();
       HasGame();
    }, [id]);
   
    return (
        <div className="App">

            <CardCenter>

                <div style={{ display: 'flex', flexDirection: ' column', padding: '8vh', margin: " 0 20vh 0 ", alignContent: "center" }} >
                    <div style={{ display: 'flex', flexDirection: 'row', alignContent: "center", margin:"0 0 5vh 0" }}>

                        <div style = {{ display: 'flex', flexDirection: ' column', }}>
                            <GameCard image={Game?.poster} />
                           
                           
                            { !userHasGame && (
                                <Button onClick={() => buyGame()}>Comprar</Button>
                            )}                     
                            { userHasGame && (
                                <Button onClick={() => dowloadGame()}>Download</Button>
                            )}
                           
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