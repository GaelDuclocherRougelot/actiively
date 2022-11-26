import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FiltersList from './Filters/filters/FiltersList';
import PostsList from './Posts/Posts/PostsList';
import './activityListStyles.css';


function ActivityList({
  results,
}) {
  // Hook created to manage parametres's filters:
  const [gender, setGender] = useState('');
  console.log('ma selection gender dans activitylist ', gender)

  // level's filters parametre function
  const handleChoseGender = (genderFilters) => {
    setGender(genderFilters);
  };

  // function to mange array for props:
  const arr = results;
  console.log('le tableau avant tri' , arr)
  const day1 = gender.monday;
  const day2 = gender.tuesday;
  const day3 = gender.wednesday;
  const day4 = gender.thursday;
  const day5 = gender.friday;
  const day6 = gender.saturday;
  const day7 = gender.sunday;
  const gender1 = gender.mixt;
  const gender2 = gender.women;
  const gender3 = gender.men;
  const level1 = gender.allLevel;
  const level2 = gender.beginner;
  const level3 = gender.confirmed;

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
console.log('le tableau apres tri' , result)

  return (
    <div>
      <div className="container-activity">
        <FiltersList
          GenderSelect={handleChoseGender}
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
