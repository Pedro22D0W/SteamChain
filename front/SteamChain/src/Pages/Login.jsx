import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CardCenter from "../components/Cards/CardCenter";
import InputField from "../components/Forms/InputField";
import Button from "../components/forms/Button";
import gaming_1 from "../assets/gaming_1.svg";
import { useState } from "react";
import { login } from "../Service/AuthService.js";
import { useEffect } from "react";
import "./Style/LoginStyle.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const submitLogin = async () => {
    try {
      const response = await login(email, password, Navigate);
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
  };

  useEffect(() => {
   localStorage.clear();
  }, []);


  return (
    <div className="login-container-style">
      <img src={gaming_1} alt="gaming_1" className="image-style" />
      <CardCenter>
        <div>
          <div>
            <InputField
              label="Email"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <InputField
              label="Senha"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "row" }}
            //onClick={() => submitLogin()}
          >
            <Button onClick={() => submitLogin()}>Entrar</Button>
            <Button>
              <Link style={{ color: "#FFFFFF" }} to="/register">
                Registrar
              </Link>
            </Button>
          </div>
        </div>
      </CardCenter>
    </div>
  );
};

export default Login;
