/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFilterReducer, { getActionValue } from '../../../Hooks/useFilterReducer';
import './filterStyles.scss';

function Filters({
  filtersChoice,
}) {
  const { Filter, filterDispatch } = useFilterReducer();
  const [hiden, ishiden] = useState('false');

  filtersChoice(Filter);
  const handleChangeFilter = () => {
    ishiden(!hiden);
  };

  const handleCheckBoxChange = (e) => {
    filterDispatch(getActionValue(e.target.name, e.target.checked));
  };

  return (
    <div>
      <button
        className="filter-style"
        type="button"
        onClick={handleChangeFilter}
      >
        Filtres
      </button>
      {!hiden && (
      <div className="global-container">
        <div>
          <h1 className="filter-title">Jours de disponibilité</h1>
          <div className="filters-container">
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="monday"
                  onChange={handleCheckBoxChange}
                />
                <span>Lundi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="tuesday"
                  onChange={handleCheckBoxChange}
                />
                <span>Mardi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="wednesday"
                  onChange={handleCheckBoxChange}
                />
                <span>Mercredi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="thursday"
                  onChange={handleCheckBoxChange}
                />
                <span>Jeudi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="friday"
                  onChange={handleCheckBoxChange}
                />
                <span>Vendredi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="saturday"
                  onChange={handleCheckBoxChange}
                />
                <span>Samedi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="sunday"
                  onChange={handleCheckBoxChange}
                />
                <span>Dimanche</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="filter-title">Niveau</h1>
          <div className="filters-container">
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="allLevel"
                  onChange={handleCheckBoxChange}
                />
                <span>Tous niveaux</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="beginner"
                  onChange={handleCheckBoxChange}
                />
                <span>Débutant</span>
              </label>
            </div>

            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="confirmed"
                  onChange={handleCheckBoxChange}
                />
                <span>Confirmé</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="filter-title">Genre</h1>
          <div className="filters-container">
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="mixt"
                  onChange={handleCheckBoxChange}
                />
                <span>Mixte</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="women"
                  onChange={handleCheckBoxChange}
                />
                <span>Féminin</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="men"
                  onChange={handleCheckBoxChange}
                />
                <span>Masculin</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

Filters.propTypes = {
  filtersChoice: PropTypes.func,
};

Filters.defaultProps = {
  filtersChoice: '',
};

export default React.memo(Filters);
