/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import Sport from '../../images/Sport.svg';

import './registration.scss';

function registration() {
  return (
    <div className="container">
      <div className="container-image">
        <img src={Sport} alt="Sport" className="image" />
      </div>
      <div className="container-form">

        <h1 className="container-title">Inscription</h1>

        <form className="ui form container-form">

          <div className="field">
            <label className="label-form">
              Nom
              <Icon disabled name="user" size="large" className="icon" />
            </label>
            <input placeholder="Nom..." />
          </div>

          <div className="field">
            <label>
              E-mail de connexion
              <Icon disabled name="mail" size="large" className="icon" />
            </label>
            <input placeholder="MonOrganisme@gmail.com..." />
          </div>

          <div className="field">
            <label>
              Mot de passe
              <Icon disabled name="key" size="large" className="icon" />
            </label>
            <input placeholder="Mot de passe..." />
          </div>

          <div className="field">
            <label>
              Confirmer le mot de passe
              <Icon disabled name="key" size="large" className="icon" />
            </label>
            <input placeholder="confirmer le mot de passe..." />
          </div>

          <div className="field">
            <label>
              {' '}
              Numéro de téléphone
              <Icon disabled name="phone" size="large" className="icon" />
            </label>
            <input placeholder="06..." />
          </div>

          <div className="field">
            <label>
              E-mail de contact
              <Icon disabled name="mail" size="large" className="icon" />
            </label>
            <input placeholder="MonOrganisme@gmail.com..." />
          </div>
          <div className="field">
            <label>
              Description
              <Icon disabled name="pencil" size="large" className="icon" />
            </label>
            <textarea placeholder="Ma super association..." />
          </div>

          <div className="field">
            <button className="ui color1 button" type="submit">Envoyer</button>
          </div>
        </form>
      </div>

    </div>
  );
}
export default React.memo(registration);
