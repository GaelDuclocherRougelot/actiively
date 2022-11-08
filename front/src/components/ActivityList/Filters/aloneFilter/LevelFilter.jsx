/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './levelFilterStyles.css';

function LevelFilter() {
  return (
    <div>
      <h1 className="level-title">Niveau</h1>
      <div className="level-container">
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Tous les niveaux</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Débutant</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Confirmé</span>
          </label>
        </div>

      </div>
    </div>
  );
}

export default React.memo(LevelFilter);
