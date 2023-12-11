
import { useState } from 'react';
import button from './forms/Style/ButtonStyle.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function Header(props) {
  const location = useLocation();
  const [account, setAccount] = useState(null);
  

  const ConectWollet = async () => {
    try {
      const { ethereum } = window;
      const response = await ethereum.request({
        method: "eth_requestAccounts",
        params: []
      });
      setAccount(response[0]);
      console.log(response);

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
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={headerStyle}>

  {location.pathname ==="/developer" ? (
      <button className="button-52" role="button">
        <Link style={{ color: "#FFFFFF" }} to = '/'>Logout</Link>
      </button>
     ) : (
      <div style={headerStyle}>
        <button className="button-52" role="button">
          <Link style={{ color: "#FFFFFF" }} to='/developer'>&#x2190; Voltar</Link>
        </button>
      </div>
    )}
  </div>


  <div style={headerStyle}>
    {account ? (
      <h1>{account}</h1>
    ) : (
      <button className="button-52" role="button" onClick={() => ConectWollet()}>
        Conectar Carteira
      </button>
    )}
  </div>
</header>
  );
}

export default Header;