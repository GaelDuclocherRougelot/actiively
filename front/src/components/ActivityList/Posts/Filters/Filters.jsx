/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFilterReducer from '../../../Hooks/useFilterReducer';
import './levelFilterStyles.css';

function Filters({
  filtersChoice,
}) {
  const { Filter, filterDispatch } = useFilterReducer();
  const [hiden, ishiden] = useState('false');
  const handleChangeFilter = () => {
    ishiden(!hiden);
  };
  filtersChoice(Filter);

  // creation action generateur

  function getActionValue(name, value) {
    return {
      type: 'SET_VALUE',
      payload: {
        name,
        value,
      },

    };
  }

  return (
    <div className="filters-container">
      <button
        type="button"
        className="filters-styles"
        onClick={handleChangeFilter}
      >
        Filtres
      </button>
      {!hiden && (
      <div className="C">
        <div>
          <h1 className="level-title">Jours de disponibilité</h1>
          <div className="level-container">
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.monday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('monday', e.target.checked))}
                />
                <span>Lundi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.tuesday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('tuesday', e.target.checked))}
                />
                <span>Mardi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.wednesday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('wednesday', e.target.checked))}
                />
                <span>Mercredi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.thursday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('thursday', e.target.checked))}
                />
                <span>Jeudi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.friday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('friday', e.target.checked))}
                />
                <span>Vendredi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.saturday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('saturday', e.target.checked))}
                />
                <span>Samedi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.sunday}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('sunday', e.target.checked))}
                />
                <span>Dimanche</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="level-title">Niveau</h1>
          <div className="level-container">
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.allLevel}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('allLevel', e.target.checked))}
                />
                <span>Tous niveaux</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.beginner}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('beginner', e.target.checked))}
                />
                <span>Débutant</span>
              </label>
            </div>

            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.confirmed}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('confirmed', e.target.checked))}
                />
                <span>Confirmé</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="level-title">Genre</h1>
          <div className="level-container">
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.mixt}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('mixt', e.target.checked))}
                />
                <span>Mixte</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.women}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('women', e.target.checked))}
                />
                <span>Féminin</span>
              </label>
            </div>

            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={Filter.men}
                  id="opt-in"
                  onChange={(e) => filterDispatch(getActionValue('men', e.target.checked))}
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
