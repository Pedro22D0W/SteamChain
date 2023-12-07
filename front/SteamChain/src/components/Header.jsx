
import { useState } from 'react';
import button from './forms/Style/ButtonStyle.css';


  function Header(props) {
    const [account,setAccount] = useState(null);  

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

 const headerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    
    padding: '10px',
    textAlign: 'center',
  };

 
    return (
      <header style={headerStyle}>

        {account ? (<h1>{account}</h1> ) : (<button  className="button-52" role="button" onClick={() => ConectWollet()}>Conectar Carteira </button>)}
          
      </header>      
    );
  }
  
  export default Header;