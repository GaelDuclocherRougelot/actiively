/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Sport from '../../images/Sport3.svg';
import './profil.scss';

function profil() {
  return (
    <div className="container">
      <div className="container-image">
        <img src={Sport} alt="Sport" className="image" />
      </div>
      <div className="container">
        <div className="container-form">
          <div className="random">
            <h1 className="container-title">Modifier mon profil</h1>
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
          <h1> Nom</h1>
          <h1> Mon organisme</h1>
          <h1>Email de connexion</h1>
          <p> blablabla...</p>
          <h1>Numero de téléphone</h1>
          <p> blablabla...</p>
          <h1> Email de contact</h1>
          <p> blablabla...</p>
          <h1>Description </h1>
          <p> blablabla...</p>
        </div>
      </div>
    </div>

  );
}

export default React.memo(profil);
