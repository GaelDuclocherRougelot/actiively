/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Icon } from 'semantic-ui-react';
import './modifProfil.scss';
import Sport from '../../images/Sport2.svg';

function ModifProfil() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
              <Link to="/organism/profile" className="link">
                <Button
                  animated="vertical"
                  className="ui color1 button"
                >
                  <Button.Content hidden>
                    <Icon name="home" />
                  </Button.Content>
                  <Button.Content visible>
                    X
                  </Button.Content>
                </Button>
              </Link>
            </p>
          </div>

          <form className="ui form container-form" onSubmit={handleSubmit(onSubmit)}>

            <div className="field">

              <label className="label-form">
                Nom
              </label>
              <input
                placeholder="Nom..."
                id="nom"
                type="text"
                name="nom"
                {...register('name')}
              />
            </div>

            <div className="field">
              <label>
                E-mail de connexion
              </label>
              <input
                placeholder="MonOrganisme@gmail.com..."
                type="text"
                id="emailConnexion"
                name="emailConnexion"
                {...register('emailConnexion')}
              />
            </div>

            <div className="field">
              <label>
                Numéro de téléphone
              </label>
              <input
                placeholder="06..."
                id="téléphone"
                type="text"
                name="téléphone"
                {...register('téléphone')}
              />
            </div>

            <div className="field">
              <label>
                E-mail de contact
              </label>
              <input
                placeholder="MonOrganisme@gmail.com..."
                id="mailContact"
                type="text"
                name="mailContact"
                {...register('mailContact')}
              />
            </div>
            <div className="field">
              <label>
                Description
              </label>
              <textarea
                placeholder="Ma super association..."
                id="description"
                type="text"
                name="
              description"
                {...register('description')}
              />
            </div>

            <Button type="submit" className="ui color1 button"> Modifier</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default React.memo(ModifProfil);
