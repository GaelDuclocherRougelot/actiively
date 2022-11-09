/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Sport from '../../images/Sport3.svg';
import './profil.scss';

function Profil() {
  const [organism, setOrganism] = useState({});

  // Request to API to get data for an Activity with an id in URL
  const fetchOrganism = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/organism/profile');
      // Update state with results
      setOrganism(response.data);
      // console.log(response.data);
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
            <Link to="/organism/:id/profil/modif" className="link">
              <Button
                animated="vertical"
                className="ui color1 button"
              >
                <Button.Content hidden>
                  <Icon name="pencil" />
                </Button.Content>
                <Button.Content visible>
                  <Icon name="home" />
                </Button.Content>
              </Button>
            </Link>
          </p>
        </div>
        <div className="organism-infos-body">
          <div className="organism-field">
            <h2>Nom</h2>
            <p>Les Raquettes</p>
            {/* <p>{organism_name}</p> */}
          </div>
          <div className="organism-field">
            <h2>Email de connexion</h2>
            <p>monique.pro@gmail.com</p>
            {/* <p>{organism_email}</p> */}
          </div>
          <div className="organism-field">
            <h2>Numero de téléphone</h2>
            <p>0689820214</p>
            {/* <p>{organism_phone_number}</p> */}
          </div>
          <div className="organism-field">
            <h2>Email de contact</h2>
            <p>raquettes@gmail.com</p>
            {/* <p>{organism_contact_email}</p> */}
          </div>
          <div className="organism-field">
            <h2>Description </h2>
            {/* eslint-disable-next-line max-len */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a doloremque reiciendis libero fugit officia blanditiis accusamus sed iste itaque laudantium, necessitatibus exercitationem quaerat, quos fugiat. Voluptatum libero fugiat maxime? </p>
            {/* <p>{organism_description}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Profil);
