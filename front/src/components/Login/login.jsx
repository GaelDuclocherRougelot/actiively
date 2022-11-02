import React from 'react';
import { Link } from "react-router-dom";
import Sport from'../../images/Sport.svg';
import './login.scss';


function login () {
    return(
    <div className='container'>
        <div className='container-image'>
            <img src={Sport} alt="Sport" className='image' /> 
        </div>
        
        <div className='container-form'>
        <div>
        <h2 className='form-title'> Connexion organisme</h2>
        </div>
        <form class="ui form container-form">
            <div class="field">
                <input placeholder="adresse mail"/>
            </div>
            <div class="field">
                <input placeholder="mot de passe"/>
            </div>
                                      
            <div class="field">
                <button class="ui button" type="submit"> connexion</button>
            </div>

        </form>
            <div> 
                <Link to="/register" className='link'> Pas encore inscrit ?</Link>
            </div>
        </div>
    </div>
  
    )
}

export default React.memo(login);