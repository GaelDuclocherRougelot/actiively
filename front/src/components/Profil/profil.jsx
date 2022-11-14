/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Sport from '../../images/Sport3.svg';
import './profil.scss';

function Profil({
  token,
}) {
  const [organism, setOrganism] = useState({});

  // Request to API to get profile data of an organism depending on token
  const fetchOrganism = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/organism/profile', {
        headers: {
          authorization: token,
        },
      });
      // Give data to state
      setOrganism(response.data.user);
    }
    catch (error) {
      console.log(error);
    }
  };

  // useEffect so that data is fetched on mount
  useEffect(
    () => {
      fetchOrganism();
    },
    [],
  );

  return (
    <div className="organism-page-container">
      <div className="organism-section">
        <img src={Sport} alt="Sport" className="image" />
      </div>
      <div className="organism-section">
        <div className="organism-infos-header">
          <h1 className="container-title">Mon profil</h1>
          <p className="cancel-modif">
            <Link to="/organism/profile/modif" className="link">
              <Button
                className="ui color1 button"
              >
                <Button.Content visible>
                  <Icon name="pencil" />
                </Button.Content>
              </Button>
            </Link>
          </p>
        </div>
        <div className="organism-infos-body">
          <div className="organism-field">
            <h2>Nom</h2>
            <p>{organism.name}</p>
          </div>
          <div className="organism-field">
            <h2>E-mail de connexion</h2>
            <p>{organism.email}</p>
          </div>
          <div className="organism-field">
            <h2>Numéro de téléphone</h2>
            <p>{organism.phone_number}</p>
          </div>
          <div className="organism-field">
            <h2>E-mail de contact</h2>
            <p>{organism.contact_email}</p>
          </div>
          <div className="organism-field">
            <h2>Description </h2>
            <p>{organism.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Profil.propTypes = {
  token: PropTypes.string.isRequired,
};

export default React.memo(Profil);
