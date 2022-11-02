/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './homeStyle.scss';

function home() {
  return (
    <div className="home">
      <header>
        <h2 className="home-title"> Actiively </h2>
        <h3 className="home-subtitle"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </h3>
      </header>

      <section className="form-home">
        <div>
          <form className="ui large form">
            <div className="equal width fields">
              <div className="field color2">
                <label>nom de l&apos;activité</label>
                <input placeholder="Judo..." />
              </div>

              <div className="field color2">
                <label>code postal</label>
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
      <section className="text-home">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          {' '}
          <br />
          It has roots in a piece of classical Latin literature from 45 BC, making
          {' '}
          <br />
          it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          {' '}
          <br />
          looked up one of the more obscure Latin words
        </p>
      </section>
    </div>

  );
}

export default React.memo(home);
