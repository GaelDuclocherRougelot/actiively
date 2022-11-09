/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useState } from 'react';
import './levelFilterStyles.css';

function LevelFilter({
  firstLevel,
  secondFilter,
  thirdFilter,
}) {
  const [checkFirstLevel, setCheckFirstLevel] = useState('');
  const [checkSecondLevel, setCheckSecondtLevel] = useState('');
  const [checkThirdLevel, setCeckThirdLevel] = useState('');

  firstLevel(checkFirstLevel);
  secondFilter(checkSecondLevel);
  thirdFilter(checkThirdLevel);



  const handleChangeFirstLevel = (e) => {
    if (e.target.checked) {
      setCheckFirstLevel('Débutant');
    }
    else {
      setCheckFirstLevel('');
    }
  };

  const handleChangeSecondeFilter = (e) => {
    if (e.target.checked) {
      setCheckSecondtLevel('Confirmé');
    }
    else {
      setCheckSecondtLevel('');
    }
  };

  const handleChangeThirdFilter = (e) => {
    if (e.target.checked) {
      setCeckThirdLevel('Tous niveaux');
    }
    else {
      setCeckThirdLevel('');
    }
  };

  return (
    <div>
      <h1 className="level-title">Niveau</h1>
      <div className="level-container">
        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeFirstLevel}
            />
            <span>Tous niveaux</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeSecondeFilter}
            />
            <span>Débutant</span>
          </label>
        </div>

        <div className="cat action">
          <label>
            <input
              type="checkbox"
              value="1"
              id="opt-in"
              onChange={handleChangeThirdFilter}
            />
            <span>Confirmé</span>
          </label>
        </div>

      </div>
    </div>
  );
}

export default React.memo(LevelFilter);
