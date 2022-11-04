/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function DayFilter() {
  return (
    <div>
      <h1 className="level-title">Jours de disponibilité</h1>
      <div className="level-container">
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Lundi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Mardi</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Mercredi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Jeudi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Vendredi</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Samedi</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Dimanche</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DayFilter);
