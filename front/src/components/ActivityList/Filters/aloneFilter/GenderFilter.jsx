/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function GenderFilter() {
  return (
    <div>
      <h1 className="level-title">Genre</h1>
      <div className="level-container">
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Mixte</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Féminin</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input type="checkbox" value="1" id="opt-in" />
            <span>Masculin</span>
          </label>
        </div>

      </div>
    </div>

  );
}

export default React.memo(GenderFilter);
