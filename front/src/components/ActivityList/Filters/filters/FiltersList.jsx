import React from 'react';
import DayFilter from '../aloneFilter/DayFilter';
import LevelFilter from '../aloneFilter/LevelFilter';
import GenderFilter from '../aloneFilter/GenderFilter';
import './filtersStyles.scss';

function FiltersList() {
  return (
    <div className="filters-container">
      <button type="button" className="filters-styles">Filtres</button>
      <DayFilter />
      <LevelFilter />
      <GenderFilter />
    </div>
  );
}

export default React.memo(FiltersList);
