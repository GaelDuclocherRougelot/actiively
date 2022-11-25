/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useReducer } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const genderFiltersInitial = {
  mixt: '',
  women: '',
  men: '',
};


function genderReducer(oldState, action) {
  switch (action.type) {
    case 'checkbox': {
      if (action.payload.name === 'mixt') {
        let mixt = (action.payload.value);
        if (mixt) {
          mixt = 'Mixte';
        }
        else {
          mixt = '';
        }
        return {
          ...oldState,
          mixt,
        };
      }
      if (action.payload.name === 'women') {
        let women = (action.payload.value);
        if (women) {
          women = 'Féminin';
        }
        else {
          women = '';
        }
        return {
          ...oldState,
          women,
        };
      }
      if (action.payload.name === 'men') {
        let men = (action.payload.value);
        if (men) {
          men = 'Masculin';
        }
        else {
          men = '';
        }
        return {
          ...oldState,
          men,
        };
      }
    }
    default:
      return oldState;
  }
}


function GenderFilter({
  GenderSelect,
}) {
  const [genderFilters, filterDispatch] = useReducer(genderReducer, genderFiltersInitial);
  console.log('genderfilter', genderFilters);
  GenderSelect(genderFilters);

  return (
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
                type: 'checkbox',
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
                type: 'checkbox',
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
                type: 'checkbox',
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

  );
}

GenderFilter.propTypes = {
  GenderSelect: PropTypes.func,
};

GenderFilter.defaultProps = {
  GenderSelect: '',
};

export default React.memo(GenderFilter);
