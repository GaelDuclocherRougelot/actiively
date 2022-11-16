/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Icon } from 'semantic-ui-react';
// import axios from 'axios';
import './modifActivity.scss';
import Sport from '../../images/Sport4.svg';

function ModifActivity() {
    const navigate = useNavigate();

    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
            address: '',
            zip_code: '',
            city: '',
            price: '',
            price_type: '',
            gender: '',
            level: '',
            day: '',
            start_time: '',
            end_time: '',

        },
    });
    // type de tarif : menu déroulant (par an, trimestre, séance, mois)
    const onSubmit = (data, event) => {
        console.log(data, 'data');
        console.log(event, 'event');
    };
    /*
     const onSubmit = (data) => {
        axios
          .post(
            'http://localhost:3001/api/v1/organism/activity/:id/edit',
            data,
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.data);
          });
        navigate('/activity');
      };
    */
    return (

        <div className="container">

            <div className="container-image">
                <img
                    src={Sport}
                    alt="Sport"
                    className="image"
                />
            </div>
            <div className="container">
                <div className="container-form">
                    <div className="random">
                        <h1 className="container-title">Modifier mon activité</h1>
                        <p className="cancel-modif">
                            <Link to="/organism/profile" className="link">
                                <Button
                                    animated="vertical"
                                    className="ui color1 button"
                                >
                                    <Button.Content hidden>
                                        <Icon name="address card outline" />
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
                                upload image :
                            </label>
                            <input
                                id="image_url"
                                type="file"
                                name="image_url"
                                {...register('image_url')}
                            />
                            <label className="label-form">
                                Nom de l activité :
                            </label>
                            <input
                                placeholder="les sbires de Gul'dan"
                                id="name"
                                type="text"
                                name="name"
                                {...register('name', {
                                    minLength: {
                                        value: 3,
                                        message: '3 caractères minimum',
                                    },
                                })}
                            />
                            {errors.name && <p className="errors">{errors.name.message}</p>}

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

                        <div className="field">
                            <label className="label-form">
                                Adresse
                            </label>
                            <input
                                placeholder="123 royaume de Lordaeron"
                                id="address"
                                type="text"
                                name="address"
                                {...register('address', {
                                    minLength: {
                                        value: 3,
                                        message: '3 caractères minimum',
                                    },
                                })}
                            />
                            {errors.address && <p className="errors">{errors.address.message}</p>}

                        </div>

                        <div className="field">
                            <label className="label-form">
                                ville
                            </label>
                            <input
                                placeholder="Lyon"
                                id="city"
                                type="text"
                                name="city"
                                {...register('city', {
                                    minLength: {
                                        value: 3,
                                        message: '3 caractères minimum',
                                    },
                                })}
                            />
                            {errors.city && <p className="errors">{errors.city.message}</p>}
                        </div>

                        <div className="field">
                            <label className="label-form">
                                postal_code
                            </label>
                            <input
                                placeholder="01000"
                                id="zip_code"
                                type="number"
                                name="zip_code"
                                {...register('zip_code', {
                                    pattern: {
                                        value: /^[0-9]{5}$/,
                                        message: 'format code postal invalide',
                                    },
                                })}
                            />
                            {errors.zip_code && <p className="errors">{errors.zip_code.message}</p>}
                        </div>
                        <div className="field">
                            <label className="label-day">
                                jour de l activité
                                <select
                                    {...register('day')}
                                >
                                    <option value="Lundi">Lundi</option>
                                    <option value="Mardi">Mardi</option>
                                    <option value="Mercredi">Mercredi</option>
                                    <option value="Jeudi">Jeudi</option>
                                    <option value="Vendredi">Vendredi</option>
                                    <option value="Samedi">Samedi</option>
                                    <option value="Dimanche">Dimanche</option>

                                </select>
                            </label>

                            <label className="label-day">
                                heure de départ de l activité
                                <input
                                    placeholder="heure de début de l'activité"
                                    type="text"
                                    name="start_time"
                                    {...register('start_time', {
                                        minLength: {
                                            value: 3,
                                            message: '3 caractères minimum',
                                        },
                                    })}
                                />
                                {errors.start_time && <p className="errors">{errors.start_time.message}</p>}

                            </label>
                            <label className="label-day">
                                heure de fin de l activité
                                <input
                                    placeholder="heure de fin de l'activité"
                                    type="text"
                                    name="end_time"
                                    {...register('end_time', {
                                        minLength: {
                                            value: 3,
                                            message: '3 caractères minimum',
                                        },
                                    })}
                                />
                                {errors.end_time && <p className="errors">{errors.end_time.message}</p>}
                            </label>
                        </div>
                        {' '}
                        <div className="field">
                            <label className="label-form">
                                Tarif
                            </label>
                            <input
                                placeholder="1 euro ca mange pas de pain"
                                id="price"
                                type="number"
                                name="price"
                                {...register('price', {
                                    minLength: {
                                        value: 1,
                                        message: '1 caractères minimum',
                                    },
                                })}
                            />
                            {errors.price && <p className="errors">{errors.price.message}</p>}
                        </div>
                        <div className="field">
                            <label className="label-form">
                                Type de tarif
                                <select
                                    {...register('price_type', { required: 'Ce champ est obligatoire' })}
                                >
                                    <option value="Lundi">Séance</option>
                                    <option value="Mardi"> Mois</option>
                                    <option value="Mercredi">Année</option>
                                    <option value="Jeudi">trimestriel</option>

                                </select>
                                {errors.price_type && <p className="errors">{errors.price_type.message}</p>}

                            </label>
                        </div>
                        <div className="field">
                            <label className="label-form">
                                <select
                                    {...register('gender')}
                                >
                                    <option value="Homme">Masculin</option>
                                    <option value="Femme">Féminin</option>
                                    <option value="Mixte">Mixte</option>

                                </select>
                            </label>
                            <label className="label-form">
                                <select
                                    {...register('level')}
                                >
                                    <option value="débutant">Débutant</option>
                                    <option value="Tous niveaux">Tous niveaux</option>
                                    <option value="Confirmé">Confirmé</option>

                                </select>
                            </label>
                        </div>
                        <div className="field">
                            <Button
                                type="submit"
                                className="ui color1 button"
                            >
                                Créer

                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default React.memo(ModifActivity);
