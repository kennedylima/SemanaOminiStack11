import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './logon.css'

import api from '../../services/api';

import logo from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();
  async function handleLogin(event) {
    event.preventDefault();

    try {
      const { data } = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha ao realizar o login');
    }
  } 

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input 
            value={id} 
            onChange={e => setId(e.target.value)} 
            placeholder="Sua ID" 
          />
          <button className="button" type="submit"> Entrar </button>

          <Link to="/register" className="link">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes" />
    </div>
  )
}