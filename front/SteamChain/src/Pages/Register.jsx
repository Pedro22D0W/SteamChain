import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardCenter from '../components/Cards/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
import { useState } from 'react';
import "./Style/RegisterStyle.css"
import { register } from '../Service/AuthService.js';
const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState(null);
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
    } catch (error) {
      console.error("Erro ao conectar a carteira:", error);
    }
  }

  const submitRegister = async () => {
    try {
      const role = "USER";
      const response = await register(username,password,email,role,account);
      console.log(response);
      if (response) {
        return Navigate('/');
      }
    } catch (error) {
      console.error("Erro ao efetuar registro:", error);
    }

  };

    return (
      <div className='register-container-style'>
        <CardCenter >

          <div>
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

            <Button onClick={() => submitRegister()}>Registrar</Button>
          </div>

        </CardCenter>

      </div>
    );
  };




  export default Register;