import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sport from '../../images/Sport.svg';
import './login.scss';

function Login({
  setToken,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function loginUser(credentials) {
    console.log('creds:', credentials);
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    console.log('Login:', token);
    setToken(token);
    navigate('/organism/1/profil');
  };

  return (
    <div className="container">
      <div className="container-image">
        <img src={Sport} alt="Sport" className="image" />
      </div>

      <div className="container-form">
        <div>
          <h2 className="form-title"> Connexion organisme</h2>
        </div>
        <form className="ui form container-form" onSubmit={handleSubmit}>
          <div className="field">
            <input type="email" placeholder="adresse mail" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="field">
            <input type="password" placeholder="mot de passe" onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div className="field">
            <button className="ui color1 button" type="submit">Connexion</button>
          </div>

        </form>
        <div>
          <Link to="/register" className="link"> Pas encore inscrit ?</Link>
        </div>
      </div>
    </div>

  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default React.memo(Login);
