import React from "react";
import {Icon} from 'semantic-ui-react'
import './homeStyle.css';

function home() {
  return (
    <div className="home">
    <header>
      <h2 class='title'> Atiively </h2>
      <h3 class='subtitle'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </h3>
    </header>
    
    <section class='form-recherche-home'>
        <form class="ui-form">
            <span class="field-form">
                <input placeholder="nom de l'activité ..."
                className="form form-activity"
                />
            </span>

            <span class="field-form">
                <input placeholder="code postal..."
                className="form form-postal"
                />
            </span>
            <span class="field-form">
            <Icon disabled name='search' size='large' className="search" />
            </span>
            
        </form>

    </section>

    <section class='text-home'>
        <p> 
        Contrary to popular belief, Lorem Ipsum is not simply random text. <br/> 
        It has roots in a piece of classical Latin literature from 45 BC, making <br/> 
        it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, <br/> 
        looked up one of the more obscure Latin words
        </p>
    </section>
    </div>
    

    
  );
}

export default home;
