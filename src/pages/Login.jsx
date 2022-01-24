import React, { useContext, useEffect } from "react";
import logo from '../assets/images/logo.png';
import login from '../utils/firebase/auth';
import { Auth } from "../utils/context/AuthContext";

import '../styles/login.css';
import '../styles/common.css';

const LogIn = ({history}) => {
  const { usuario } = useContext(Auth);
  
  useEffect(() => {
    if (usuario) {
        history.push("/detail");
    }
  }, [history, usuario]);

  const loguearUsuario = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {   
      login(email.value, password.value);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section className='login'>
      <img src={logo} alt='logo' width={'30%'}/>
      <h1>Bienvenida al Portal</h1>
      <form onSubmit={loguearUsuario}>
          <div >
              <input type="email" placeholder="Correo electrónico" name="email"></input>
          </div>
          <div >
              <input type="password" placeholder="Contraseña" name="password"></input>
          </div>
          <button className="button" type="submit">Enviar</button>
      </form>
    </section>
  )
};

export default LogIn;