import React from 'react';
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
}) {

  // for day
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


// for LEVEL
  const handleFirstFilter = (selectFirstLevel) => {
    FirstLevel(selectFirstLevel);
  };
  const handleSecondFilter = (selectSecondLevel) => {
    SecondLevel(selectSecondLevel);
  };
  const handleThirdFilter = (selectThirdLevel) => {
    ThirdLevel(selectThirdLevel);
  };

  return (
    <div className="filters-container">
      <button type="button" className="filters-styles">Filtres</button>
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
        FirstLevelSelect={handleFirstFilter}
        SecondLevelSelect={handleSecondFilter}
        ThirdLevelSelect={handleThirdFilter}

      />
      <GenderFilter />
    </div>
  );
}

export default React.memo(FiltersList);
