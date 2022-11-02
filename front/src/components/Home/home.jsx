import React from "react";
import './homeStyle.scss';

function home() {
  return (
    <div className="home">
    <header>
      <h2 class='home-title'> Actiively </h2>
      <h3 class='home-subtitle'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </h3>
    </header>
    
    <section class='form-home'>
   <div>
          <form class="ui large form">
            <div class="equal width fields">
              <div class="field color2">
                <label>nom de l'activité</label>
                <input placeholder="Judo..." />
              </div>

              <div class="field color2">
                <label>code postal</label>
                <input placeholder="69003..." />
              </div>
              </div>
            <button class="ui color1 button field-submit" type="submit"> <i class="icon search"> </i></button>
            <div class="ui hidden divider">
            </div>
          </form>
        </div>
 
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

export default React.memo(home);