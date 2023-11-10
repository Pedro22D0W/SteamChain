import React from 'react';
import CardCenter from '../components/CardCenter';
import InputField from '../components/forms/InputField';
import Button from '../components/forms/Button';
import { useState } from 'react';
const Register = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(username, password);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/steamchain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
             user_name:username, 
             password:password
            }),        
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
        console.error(JSON.stringify({
            user_name:username, 
            password:password
           })
           ,);
      }
    }

    return (
        <div className="App">
            <CardCenter >

                <form onSubmit={handleSubmit}>
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
                    onChange={(e) => setPassword(e.target.value)}  />
                    </div>

                    <Button>Registrar</Button>
                </form>

            </CardCenter>

        </div>
    );
};


export default Register;