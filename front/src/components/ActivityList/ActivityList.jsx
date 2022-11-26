import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Filters from './Posts/Filters/Filters';
import PostsList from './Posts/Posts/PostsList';
import './activityListStyles.css';

function ActivityList({
  results,
}) {
  // Hook created to manage parametres's filters:
  const [filtersSelect, setFiltersSelect] = useState('');
  
  // function to manage filter's object
  const handleChoseGender = (Filter) => {
    setFiltersSelect(Filter);
  };

  // function to mange array for props:
  const arr = results;
  const day1 = filtersSelect.monday;
  const day2 = filtersSelect.tuesday;
  const day3 = filtersSelect.wednesday;
  const day4 = filtersSelect.thursday;
  const day5 = filtersSelect.friday;
  const day6 = filtersSelect.saturday;
  const day7 = filtersSelect.sunday;
  const gender1 = filtersSelect.mixt;
  const gender2 = filtersSelect.women;
  const gender3 = filtersSelect.men;
  const level1 = filtersSelect.allLevel;
  const level2 = filtersSelect.beginner;
  const level3 = filtersSelect.confirmed;

  function data(table) {
    const isdayfiltrenotactive = (
      day1 === ''
    && day2 === ''
    && day3 === ''
    && day4 === ''
    && day5 === ''
    && day6 === ''
    && day7 === ''
    );

    const gendrefiltrenotactive = (
      gender1 === ''
    && gender2 === ''
    && gender3 === ''
    );
    const levelfiltrenotactive = (
      level1 === ''
    && level2 === ''
    && level3 === ''
    );
    const rightData = table.filter((el) => {
      const isvalid = (isdayfiltrenotactive || (
        el.day === day1
    || el.day === day2
    || el.day === day3
    || el.day === day4
    || el.day === day5
    || el.day === day6
    || el.day === day7
      ))
&& (gendrefiltrenotactive || (
  el.gender === gender1
    || el.gender === gender2
    || el.gender === gender3
))
&& (levelfiltrenotactive || (
  el.level === level1
    || el.level === level2
    || el.level === level3
));
      return isvalid;
    });
    return rightData;
  }

  const result = data(arr);

  return (
    <div>
      <div className="container-activity">
        <Filters
          filtersChoice={handleChoseGender}
        />
        <PostsList
          results={result}
        />
      </div>
    </div>
  );
}

ActivityList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    activity_name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    organism_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_type: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default React.memo(ActivityList);
