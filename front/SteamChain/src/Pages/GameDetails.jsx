import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/Cards/CardCenter';
import Button from '../components/forms/Button';
import GameCard from '../components/Cards/GameCard';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { getGameDetails } from '../Service/DataService.js';
import { buy, download, verify } from '../Service/StoreService.js';
import { Link, useNavigate } from "react-router-dom";
import ethereum from '../Assets/ethereum.svg';



const GameDetails = (props) => {

    const Navigate = useNavigate();
    const { id } = useParams();
    const [Game, setGame] = useState(null);
    const [userHasGame, setUserHasGame] = useState(false);

    const getDetails = async () => {
        try {
            const gameData = await getGameDetails(id);
            setGame(gameData);
            console.log(gameData);

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

            const response = await verify(localStorage.getItem('userId'), id);
            if (response) {
                setUserHasGame(true);
            }
        } catch (error) {
            console.error("Erro ao verificar se o usuário possui o jogo:", error);
        }
    }

    const downloadGame = async () => {
        try {

            const response = await download();
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
                    <div style={{ display: 'flex', flexDirection: 'row', alignContent: "center", margin: "0 0 5vh 0" }}>

                        <div style={{ display: 'flex', flexDirection: ' column', }}>
                            <GameCard image={Game?.poster} />


                            {!userHasGame && (
                                <Button onClick={() => buyGame()}><div style={{ display: "flex", flexDirection: "row",alignItems: "center" }}><a style={{color: "#FFFFFF", marginRight: "8px"}}>Comprar</a>{Game?.price}<img src={ethereum} alt="" style={{ maxWidth: '2vh',marginLeft: "4px" }} /></div></Button>
                            )}
                            {userHasGame && (
                                <Button onClick={() => downloadGame()}>Download</Button>
                            )}

                        </div>

                        <div sytle={{ maxWidth: "100%"}}>
                            <ReactPlayer
                                url={Game?.trailer}
                                Width='100%'
                                height='60vh'
                                margin='20px 0 0 0'
                                controls={true}
                            />
                        </div>

                    </div>
                    <div sytle={{ margin: "20vh 0 0 0" }}>


                        <CardCenter>
                            <div style={{ display: 'flex', flexDirection: ' column', padding: '8vh', maxHeight: "20vn" }}>
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