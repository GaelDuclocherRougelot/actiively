/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import './modifActivity.scss';
import Sport from '../../images/Sport3.svg';

function ModifActivity({
    token,
}) {
    const navigate = useNavigate();
    // Used params to add id to URL when sending an axios request
    let id = useParams();
    // Transformed result to number to match format set in the Back
    id = Number(id.id);
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

    const onSubmit = (data) => {
        axios
            .patch(
                `http://localhost:3001/api/v1/organism/activity/${id}/edit`,
                data,
                {
                    headers: {
                        authorization: token,
                    },
                },
            )
            .then((response) => {
                console.log(response.data);
                swal({
                    title: "L'activité a bien été modifiée !",
                    icon: 'success',
                  });
            })
            .catch((error) => {
                console.log(error.data);
            });
        navigate('/organism/activities');
    };

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
                                    image URL
                                </label>
                                <input
                                    placeholder="URL de votre image préférée"
                                    id="image_url"
                                    type="text"
                                    name="image_url"
                                    {...register('image_url')}
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
                                    {...register('price_type')}
                                >
                                    <option value="la séance">la séance</option>
                                    <option value="par mois">par mois</option>
                                    <option value="par an">par an</option>
                                    <option value="par trimestre">par trimestre</option>

                                </select>

                            </label>
                        </div>
                        <div className="field">
                            <label className="label-form">
                                <select
                                    {...register('gender')}
                                >
                                <option value="Masculin">Masculin</option>
                                <option value="Féminin">Féminin</option>
                                <option value="Mixte">Mixte</option>

                                </select>
                            </label>
                            <label className="label-form">
                                <select
                                    {...register('level')}
                                >
                                    <option value="Débutant">Débutant</option>
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
                                Modifier

                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
ModifActivity.propTypes = {
    token: PropTypes.string.isRequired,
};

export default React.memo(ModifActivity);
