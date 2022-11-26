/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GenderFilter from '../aloneFilter/GenderFilter';
import './filtersStyles.scss';

function FiltersList({
  GenderSelect,
}) {
// Hook created to manage  filters' parameters to hide :
  const [hiden, ishiden] = useState('false');

  const handleChangeFilter = () => {
    ishiden(!hiden);
  };

  const handleSelectFilter = (genderFilters) => {
    GenderSelect(genderFilters);
  };

  return (
    <div className="filters-container">
      <button
        type="button"
        className="filters-styles"
        onClick={handleChangeFilter}
      >
        Filtres
      </button>

      {hiden && (
      <div className="filters-container">
        <GenderFilter
          GenderSelect={handleSelectFilter}
        />
      </div>
      )}
    </div>
  );
}

FiltersList.propTypes = {
  GenderSelect: PropTypes.func,
};

FiltersList.defaultProps = {
  GenderSelect: '',
};

export default React.memo(FiltersList);
