import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sport from '../../images/Sport.svg';
import './login.scss';

function Login({
  setToken,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="container">
      <div className="container-image">
        <img src={Sport} alt="Sport" className="image" />
      </div>

      <div className="container-form">
        <div>
          <h2 className="form-title"> Connexion organisme</h2>
        </div>
        <form className="ui form container-form">
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
