/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useGenderReducer from '../../../Hooks/useGenderReducer';
import './levelFilterStyles.css';

function GenderFilter({
  GenderSelect,
}) {
  const { genderFilters, filterDispatch } = useGenderReducer();
  GenderSelect(genderFilters);

  return (
    <div>
      <div className="C">
        <div>
          <h1 className="level-title">Jours de disponibilité</h1>
          <div className="level-container">
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.monday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'monday', value: e.target.checked,
                    },
                  })}
                />
                <span>Lundi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.tuesday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'tuesday', value: e.target.checked,
                    },
                  })}
                />
                <span>Mardi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.wednesday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'wednesday', value: e.target.checked,
                    },
                  })}
                />
                <span>Mercredi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.thursday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'thursday', value: e.target.checked,
                    },
                  })}
                />
                <span>Jeudi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.friday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'friday', value: e.target.checked,
                    },
                  })}
                />
                <span>Vendredi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.saturday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'saturday', value: e.target.checked,
                    },
                  })}
                />
                <span>Samedi</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.sunday}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'sunday', value: e.target.checked,
                    },
                  })}
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
                  value={genderFilters.allLevel}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'allLevel', value: e.target.checked,
                    },
                  })}
                />
                <span>Tous niveaux</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.beginner}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'beginner', value: e.target.checked,
                    },
                  })}
                />
                <span>Débutant</span>
              </label>
            </div>

            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.confirmed}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'confirmed', value: e.target.checked,
                    },
                  })}
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
                  value={genderFilters.mixt}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'mixt', value: e.target.checked,
                    },
                  })}
                />
                <span>Mixte</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.women}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'women', value: e.target.checked,
                    },
                  })}
                />
                <span>Féminin</span>
              </label>
            </div>

            <div className="cat action">
              <label>
                <input
                  type="checkbox"
                  value={genderFilters.men}
                  id="opt-in"
                  onChange={(e) => filterDispatch({
                    type: 'SET_VALUE',
                    payload: {
                      name: 'men', value: e.target.checked,
                    },
                  })}
                />
                <span>Masculin</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

GenderFilter.propTypes = {
  GenderSelect: PropTypes.func,
};

GenderFilter.defaultProps = {
  GenderSelect: '',
};

export default React.memo(GenderFilter);
