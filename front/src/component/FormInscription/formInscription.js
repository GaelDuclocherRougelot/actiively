import React from "react";
import {Icon} from 'semantic-ui-react'
import './formInscription.css';

function formInscription() {
    return (
        <div className="container">
            <section className=" section-1">
            <h1>Design + text </h1>
            </section>

            <section className="section-2">
                <h1 className="section-title">inscription</h1>
                    <form class="ui form">
                        
                        <div class="field">
                            <label className="label-form">Nom</label>
                            <input placeholder="Nom..."/>
                        </div>
                            
                        <div class="field">
                            <label>email de connexion
                            <Icon disabled name='mail' size='large' className="icon" />
                            </label>
                            <input placeholder="MonOrganisme@gmail.com..."/>
                        </div>

                        <div class="field">
                            <label>Mot de passe</label>
                            <input placeholder="Mot de passe..."/>
                        </div>

                        <div class="field">
                            <label>confirmer le mot de passe</label>
                            <input placeholder="confirmer le mot de passe..."/>
                        </div>

                        <div class="field">
                            <label> Numéro de téléphone 
                                <Icon disabled name='phone' size='large' className="icon" />
                            </label>
                            <input placeholder="06..."/>
                        </div>

                        <div class="field">
                            <label>Email de Contact
                            <Icon disabled name='mail' size='large' className="icon" />
                            </label>
                            <input placeholder="MonOrganisme@gmail.com..."/>
                        </div>
                        <div class="field">
                            <label>Description
                            <Icon disabled name='pencil' size='large' className="icon" />
                            </label>
                            <textarea placeholder="Ma super association..."/>
                        </div>
                        
                        <div class="field">
                        <button class="ui button" type="submit"> envoyer</button>
                        </div>
                            
                            
                    </form>
            </section>
        
        </div>
    );
    }

    export default formInscription;
