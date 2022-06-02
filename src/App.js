import { useState } from "react";

import jpIMG from "./assets/Frame.svg";
import Rectangle6 from "./assets/Rectangle6.svg";
import Android from "./assets/GooglePlay.svg";
import Apple from "./assets/AppStore.svg";

import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="wrap-login">
        <form className="login-form">
          <img className="imgLogin-form" src={jpIMG} alt="CortevaLogo" />
          <p className="login-form-subtitle">
            Você faz parte do time de administradores da Corteva, entre com o
            seu usuário para ter acesso.
          </p>
          <span className="login-Rectangle">
            <img src={Rectangle6} alt="TesteRectangle" />
          </span>
          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="container-login-form-btn">
            <button className="text-center" href="#">
              Esqueci minha senha
            </button>
            <button className="login-form-btn">Login</button>
          </div>
        </form>
      </div>
      <div className="cotainer-footer">
        <div className="text-download">
          <span className="txt3" href="#">
            Baixe o aplicativo agora mesmo
          </span>
        </div>
        <div className="buttonsIMG">
          <div className="donwload-GooglePlay">
            <span className="donwload-GooglePlay">
              <img src={Android} alt="GooglePlay" />
            </span>
          </div>
          <div className="donwload-AppStore">
            <span className="donwload-AppStore">
              <img src={Apple} alt="AppStore" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
