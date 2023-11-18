import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CardCenter from '../components/CardCenter';
import Button from '../components/forms/Button';
import { Link } from 'react-router-dom';
import TabContainer from '../components/Tabs';
import GameCard from '../components/GameCard';
import ReactPlayer from 'react-player';

const GameDetails = () => {
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

    const [aba, setAba] = useState(1);

    const ChangeAba = (aba) => {
        setAba(aba);
    };

    // Use o useEffect para chamar a função quando o componente for montado
    useEffect(() => {
        obterDadosDoBanco();
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
                            <GameCard image="https://cdn1.epicgames.com/spt-assets/2d4f1465e9254425b5b03c8a429d4d9b/oirbo-ffbg6.png?h=480&quality=medium&resize=1&w=360" />
                           
                            <Button> Comprar </Button>
                           
                        </div>      

                        <div sytle = {{ margin:"20vh" }}>
                            <ReactPlayer
                                url='https://youtu.be/rE2KbXal65E'
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
                        <h1>Oirbo</h1>
                        <a>orbo é um jgo com uma paleta de cores que eu achei parecida com a do site em geral
                            por isso descido usar ele de modeloto escrevendo uma sinopse agora pra definir o layout da aplicação 
                        </a>
                    
                    </div>
                   </CardCenter>
                   </div>
                </div>









            </CardCenter>






        </div>
    );
};

export default GameDetails;