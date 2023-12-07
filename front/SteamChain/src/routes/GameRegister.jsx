import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import CardCenter from '../components/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
import { useState } from 'react';
const GameRegister = () => {

    const [name, setName] = useState('');
    const [link_poster, setLinkPoster] = useState('');
    const [link_trailer, setLinkTrailer] = useState('');
    const [about, setAbout] = useState('');
    const [price, setPrice] = useState('');

  const [account,setAccount] = useState(null); 
  const Navigate = useNavigate();

 
  const ConectWollet = async () => {
    try {
      const { ethereum } = window;
      const response = await ethereum.request({
        method: "eth_requestAccounts",
        params: []
      });
      setAccount(response[0]);
  
      setAccount(response[0]);
    } catch (error) {
      console.error("Erro ao conectar a carteira:", error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/games/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            poster: link_poster,
            trailer: link_trailer,
            about: about,
            wallet: account,
            price:price

        }),
      });

        if(response.ok) {
            return Navigate('/developer');
      }


    } catch (error) {
        console.error(JSON.stringify({
                name: name,
                poster: link_poster,
                trailer: link_trailer,
                about: about,
                wallet: account,
                price:price
      })
        ,);
    }
  };  
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      pading: '100px',

    };

    return (
      <div style={containerStyle}>
        <CardCenter >

          <form onSubmit={handleSubmit}>
           
            <div>
              <InputField
                label="Nome"
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <InputField
                label="Link do poster"
                type="text"
                placeholder="Link do poster"
                value={link_poster}
                onChange={(e) => setLinkPoster(e.target.value)} />
            </div>
            <div>
              <InputField
                label="Link do trailer"
                type="text"
                placeholder="Link do trailer"
                value={link_trailer}
                onChange={(e) => setLinkTrailer(e.target.value)} />
            </div>
            <div>
              <InputField
                label="Sobre"
                type="text"
                placeholder="Sobre"
                value={about}
                onChange={(e) => setAbout(e.target.value)} />
            </div>
            <div>
              <InputField
                label="Preço"
                type="text"
                placeholder="Preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </div>


           
            <div>
              <InputField
                label="Carteira"
                type="text"
                placeholder={account}
                value={account}
                onChange={(e) => setAccount(e.target.value)} />
                <button type='button' className="button-52" role="button" onClick={() => ConectWollet()}>Conectar Carteira </button>
            </div>

            <Button>Registrar</Button>
          </form>
          
        </CardCenter>

      </div>
    );
  };




export default GameRegister;