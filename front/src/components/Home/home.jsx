/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Home from '../../images/Home.svg';

import './homeStyle.scss';

function home() {
  return (
    <div className="home">
      <header>
        <h1 className="home-title"> Trouvez l&apos;activité qui vous correspond</h1>
      </header>

      <section className="form-home">
        <div>
          <form className="ui large form">
            <div className="equal width fields">
              <div className="field color2">
                <label>Nom de l&apos;activité</label>
                <input placeholder="Judo..." />
              </div>

              <div className="field color2">
                <label>Code postal</label>
                <input placeholder="69003..." />
              </div>
            </div>
            <button className="ui color1 button field-submit" type="submit">
              {' '}
              <i className="icon search"> </i>
            </button>
            <div className="ui hidden divider" />
          </form>
        </div>
      </section>

      <section className="image-section">
        <img src={Home} alt="accueil" className="home-image" />
        <a href="https://storyset.com/health" className="attribution">Health illustrations by Storyset</a>
      </section>
    </div>

  );
}

export default React.memo(home);
