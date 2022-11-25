/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DayFilter from '../aloneFilter/DayFilter';
import LevelFilter from '../aloneFilter/LevelFilter';
import GenderFilter from '../aloneFilter/GenderFilter';
import './filtersStyles.scss';

function FiltersList({
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
  FirstLevel,
  SecondLevel,
  ThirdLevel,
  choseGender,
}) {
// Hook created to manage  filters' parameters to hide :
  const [hiden, ishiden] = useState('false');

  const handleChangeFilter = () => {
    ishiden(!hiden);
  };
  // feature to manage day's filter
  const handleMonday = (slectMonday) => {
    Monday(slectMonday);
  };
  const handleTuesday = (selectTuesday) => {
    Tuesday(selectTuesday);
  };
  const handleWednesday = (selectWednsday) => {
    Wednesday(selectWednsday);
  };
  const handleThursday = (selectThursday) => {
    Thursday(selectThursday);
  };
  const handleFriday = (selectFriday) => {
    Friday(selectFriday);
  };
  const handleSaturday = (selectSaturday) => {
    Saturday(selectSaturday);
  };
  const handleSunday = (selectSunday) => {
    Sunday(selectSunday);
  };

  // feature to manage level's filter
  const handleFirstLevel = (selectFirstLevel) => {
    FirstLevel(selectFirstLevel);
  };
  const handleSecondLevel = (selectSecondLevel) => {
    SecondLevel(selectSecondLevel);
  };
  const handleThirdLevel = (selectThirdLevel) => {
    ThirdLevel(selectThirdLevel);
  };

  const handleSelectFilter = (genderFilters) => {
    choseGender(genderFilters);
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

      {!hiden && (
      <div className="filters-container">
        <DayFilter
          MondaySelect={handleMonday}
          TuesdaySelect={handleTuesday}
          WednesdaySelect={handleWednesday}
          ThursdaySelect={handleThursday}
          FridaySelect={handleFriday}
          SaturdaySelect={handleSaturday}
          SundaySelect={handleSunday}
        />
        <LevelFilter
          FirstLevelSelect={handleFirstLevel}
          SecondLevelSelect={handleSecondLevel}
          ThirdLevelSelect={handleThirdLevel}
        />
        <GenderFilter
          GenderSelect={handleSelectFilter}
        />
      </div>
      )}
    </div>
  );
}

FiltersList.propTypes = {
  Monday: PropTypes.func,
  Tuesday: PropTypes.func,
  Wednesday: PropTypes.func,
  Thursday: PropTypes.func,
  Friday: PropTypes.func,
  Saturday: PropTypes.func,
  Sunday: PropTypes.func,
  FirstLevel: PropTypes.func,
  SecondLevel: PropTypes.func,
  ThirdLevel: PropTypes.func,
  choseGender: PropTypes.func,
};

FiltersList.defaultProps = {
  Monday: '',
  Tuesday: '',
  Wednesday: '',
  Thursday: '',
  Friday: '',
  Saturday: '',
  Sunday: '',
  FirstLevel: '',
  SecondLevel: '',
  ThirdLevel: '',
  choseGender: '',
};

export default React.memo(FiltersList);
