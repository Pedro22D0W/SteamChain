import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import CardCenter from '../components/Cards/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
import { useState } from 'react';
const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [account,setAccount] = useState(null); 
  const Navigate = useNavigate();

  console.log(username, password);
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
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
          role: "USER",
          wallet: account

        }),
      });

      if(response.ok) {
        try {
          
          const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Origin': 'http://localhost:5173', },
  
          body: JSON.stringify({
            email: email,
            password: password
          })
        });
  
        const token = await response.json();
        localStorage.setItem('token', token.token);
        return Navigate('/developer');
          
        } catch (error) {
          console.error(error);
        }
        
  
  
      }


    } catch (error) {
      console.error(JSON.stringify({
        username: username,
        password: password
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
                label="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <InputField
                label="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
              <InputField
                label="Senha"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
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




export default Register;