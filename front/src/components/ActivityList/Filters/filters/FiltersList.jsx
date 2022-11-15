/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
  FirstGender,
  SecondGender,
  ThirdGender,
}) {
  const [hiden, ishiden] = useState('false');

  // console.log('im', hiden);
  const handleChangeFilter = () => {
    ishiden(!hiden);
  };
  // function fo day's filter
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

  // function of levl'sfilter
  const handleFirstLevel = (selectFirstLevel) => {
    FirstLevel(selectFirstLevel);
  };
  const handleSecondLevel = (selectSecondLevel) => {
    SecondLevel(selectSecondLevel);
  };
  const handleThirdLevel = (selectThirdLevel) => {
    ThirdLevel(selectThirdLevel);
  };

  // function of gender'sfilter

  const handleFirstGender = (selectFirstGender) => {
    FirstGender(selectFirstGender);
  };
  const handleSecondGender = (selectSecondGender) => {
    SecondGender(selectSecondGender);
  };
  const handleThirdGender = (selectThirdGender) => {
    ThirdGender(selectThirdGender);
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
          FirstGenderSelect={handleFirstGender}
          SecondGenderSelect={handleSecondGender}
          ThirdGenderSelect={handleThirdGender}
        />
      </div>
      )}
    </div>
  );
}

export default React.memo(FiltersList);
