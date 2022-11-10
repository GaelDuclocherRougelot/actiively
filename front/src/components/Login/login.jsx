import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Sport from '../../images/Sport.svg';
import './login.scss';

// // Post request to Back to send email + password
// async function loginUser(credentials) {
//   console.log('creds:', credentials);
//   const response = await axios.post('http://localhost:3001/api/v1/organism/login', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
//   });
//   console.log(response);
//   return response.data;
// }

function Login({
  setToken,
  setIsLogged,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/organism/login',
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
        { withCredentials: true },
      );
      console.log('response:', response.data);
      const { token } = response.data;
      console.log('token login :', token);
      console.log('res.data.token :', response.data.token);
      setToken(token);
      const login = true;
      setIsLogged(login);
      navigate('/organism/profile');
    }
    catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      }
      else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      }
      else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      }
      else {
        setErrMsg('Login Failed');
      }
      console.log(errMsg);
    }
  };

  // // On Submit get token thanks to loginUser function + redirect to profile
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log('handleSubmit', email, password);
  //   const token = await loginUser({
  //     email,
  //     password,
  //   });
  //   console.log('after handleSubmit', email, password);

  // console.log('Login:', token);
  // setToken(token);
  // const login = true;
  // setIsLogged(login);
  // navigate('/organism/1/profil');
  // };

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
  setIsLogged: PropTypes.func.isRequired,
};

export default React.memo(Login);
