import React, { useState } from "react";
import "./Login.css"; 
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controle de login

  const handleLogin = (e) => {
    e.preventDefault();
    // vou fazer a minha Lógica de autenticação aqui
    setIsLoggedIn(true); // Simulando um login bem-sucedido
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="welcome-section">
          <h1>SEJA BEM-VINDO</h1>
          <p>Acesse sua conta para continuar</p>
        </div>
        <div className="login-section">
          <div className="logo-container">
            <img src="carrinho.png" alt="Carrinho" className="logo" />
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Digite seu email" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Digite sua senha" />
            </div>
            <button type="submit" className="login-btn">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
