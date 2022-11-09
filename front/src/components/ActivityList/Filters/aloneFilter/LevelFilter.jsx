/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useState } from 'react';
import './levelFilterStyles.css';

function LevelFilter({
  FirstLevelSelect,
  SecondLevelSelect,
  ThirdLevelSelect,
}) {
  const [selectFirstLevel, setSelectFirstLevel] = useState('');
  const [selectSecondLevel, setSelectSecondtLevel] = useState('');
  const [selectThirdLevel, setSelectThirdLevel] = useState('');

  FirstLevelSelect(selectFirstLevel);
  SecondLevelSelect(selectSecondLevel);
  ThirdLevelSelect(selectThirdLevel);



  const handleChangeFirstLevel = (e) => {
    if (e.target.checked) {
      setSelectFirstLevel('Tous niveaux');
    }
    else {
      setSelectFirstLevel('');
    }
  };

  const handleChangeSecondeFilter = (e) => {
    if (e.target.checked) {
      setSelectSecondtLevel('Débutant');
    }
    else {
      setSelectSecondtLevel('');
    }
  };

  const handleChangeThirdFilter = (e) => {
    if (e.target.checked) {
      setSelectThirdLevel('Confirmé');
    }
    else {
      setSelectThirdLevel('');
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
