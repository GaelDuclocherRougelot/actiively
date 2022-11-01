import React from "react";
import {Icon} from 'semantic-ui-react'
import './registration.scss';

function registration () {
    return (
        <div className="container">
                <h1 className="container-title">inscription</h1>
                    <form class="ui form container-form">
                        
                        <div class="field">
                            <label className="label-form">Nom  
                            <Icon disabled name='user' size='large' className="icon" />
                            </label>
                            <input placeholder="Nom..."/>
                        </div>
                            
                        <div class="field">
                            <label>email de connexion
                            <Icon disabled name='mail' size='large' className="icon" />
                            </label>
                            <input placeholder="MonOrganisme@gmail.com..."/>
                        </div>

                        <div class="field">
                            <label>Mot de passe
                            <Icon disabled name='key' size='large' className="icon" />
                            </label>
                            <input placeholder="Mot de passe..."/>
                        </div>

                        <div class="field">
                            <label>confirmer le mot de passe
                            <Icon disabled name='key' size='large' className="icon" />
                            </label>
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
        
        </div>
    );
    }

    export default React.memo(registration);