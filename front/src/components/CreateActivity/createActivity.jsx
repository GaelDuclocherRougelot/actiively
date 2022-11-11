/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Button, Input, Form,
} from 'semantic-ui-react';

import Sport from '../../images/Sport.svg';
import './createActivity.scss';

function CreateActivity() {
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

    const onSubmit = (data) => console.log(data);

    return (
        <div className="container">
            <div className="container-image">
                <img src={Sport} alt="Sport" className="image" />
            </div>
            <div className="container-form">

                <h1 className="container-title">Inscription</h1>

                <form className="ui form container-form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="field">
                        <label className="label-form">
                            Nom de l activité :
                        </label>
                        <input
                            placeholder="les sbires de Gul'dan"
                            id="name"
                            type="text"
                            name="name"
                            {...register('name', {
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.name && <p className="errors">{errors.name.message}</p>}

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
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.address && <p className="errors">{errors.address.message}</p>}

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
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                    </div>
                    {errors.city && <p className="errors">{errors.city.message}</p>}

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
                                required: 'Ce champ est obligatoire',
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
                            jour de l activité :

                            <input
                                placeholder="Lundi..."
                                type="text"
                                name="day"
                                {...register('day', {
                                    required: 'Ce champ est obligatoire',
                                })}

                            />
                            {errors.day && <p className="errors">{errors.day.message}</p>}

                        </label>
                        <label className="label-day">
                            heure de départ de l activité :
                            <input
                                placeholder="jour de l'activité"
                                type="text"
                                name="start_time"
                                {...register('start_time', {
                                    required: 'Ce champ est obligatoire',
                                })}
                            />
                            {errors.start_time && <p className="errors">{errors.start_time.message}</p>}

                        </label>
                        <label className="label-day">
                            heure de fin de l activité :
                            <input
                                placeholder="heure de fin de l'activité"
                                type="text"
                                name="end_time"
                                {...register('end_time', {
                                    required: 'Ce champ est obligatoire',
                                    minLength: {
                                        value: 3,
                                        message: '3 caractères minimum',
                                    },
                                })}
                            />
                            {errors.end_time && <p className="errors">{errors.end_time.message}</p>}
                        </label>
                    </div>
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
                                required: 'Ce champ est obligatoire',
                            })}
                        />
                        {errors.price && <p className="errors">{errors.price.message}</p>}
                    </div>
                    <div className="field">
                        <label className="label-form">
                            Type de tarif
                        </label>
                        <input
                            placeholder="une baguette achetée, la 23ème offerte"
                            id="price_type"
                            type="text"
                            name="price_type"
                            {...register('price_type', {
                                required: 'Ce champ est obligatoire',
                                minLength: {
                                    value: 3,
                                    message: '3 caractères minimum',
                                },
                            })}
                        />
                        {errors.price_type && <p className="errors">{errors.price_type.message}</p>}
                    </div>
                    <div className="field">
                        <label className="label-form">
                            <select
                                {...register('gender', { required: 'Ces champs sont obligatoire' })}
                            >
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                                <option value="Mixte">Mixte</option>

                            </select>
                        </label>
                        <label className="label-form">
                            <select
                                {...register('level', { required: 'Ces champs sont obligatoire' })}
                            >
                                <option value="débutant">débutant</option>
                                <option value="Tous niveaux">Tous niveaux</option>
                                <option value="Confirmé">Confirmé</option>

                            </select>
                        </label>
                    </div>
                    {errors.gender && <p className="errors">{errors.gender.message}</p>}
                    {errors.level && <p className="errors">{errors.level.message}</p>}

                    <div className="field">
                        <Button
                            type="submit"
                            className="ui color1 button"
                        >
                            Envoyer

                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default React.memo(CreateActivity);
