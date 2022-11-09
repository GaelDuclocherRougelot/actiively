import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersList from './Filters/filters/FiltersList';
import PostsList from './Posts/Posts/PostsList';
import './activityListStyles.css';

function ActivityList({
  results,
}) {
  const [checkMonday, setCheckMonday] = useState('');
  const [checkTuesday, setCheckTuesdayd] = useState('');
  const [checkWednesday, setCheckWednesday] = useState('');
  const [checkThursday, setCheckThursday] = useState('');
  const [checkFriday, setCheckFriday] = useState('');
  const [checSaturday, setChecSaturday] = useState('');
  const [checkSunday, setCheckSunday] = useState('');

  const [checkFirstLevel, setCheckFirstLevel] = useState('');
  const [checkSecondLevel, setCheckSecondtLevel] = useState('');
  const [checkThirdLevel, setCeckThirdLevel] = useState('');



  // function of filter's day

  const handleMonday = (slectMonday) => {
    setCheckMonday(slectMonday);
  };
  const handleTuesday = (selectTuesday) => {
    setCheckTuesdayd(selectTuesday);
  };
  const handleWednsday = (selectWednsday) => {
    setCheckWednesday(selectWednsday);
  };
  const handleThursday = (selectThursday) => {
    setCheckThursday(selectThursday);
  };
  const handleFriday = (selectFriday) => {
    setCheckFriday(selectFriday);
  };
  const handleSaturday = (electSaturday) => {
    setChecSaturday(electSaturday);
  };
  const handleSunday = (selectSunday) => {
    setCheckSunday(selectSunday);
  };

  // function of filter's levl
  const handleFirstLevel = (selectFirstLevel) => {
    setCheckFirstLevel(selectFirstLevel);
  };
  const handleSecondLevel = (selectSecondLeve) => {
    setCheckSecondtLevel(selectSecondLeve);
  };
  const handleThirdLevel = (selectThirdLevel) => {
    setCeckThirdLevel(selectThirdLevel);
  };
  const arr = results;
  const day1 = checkMonday;
  const day2 = checkTuesday;
  const day3 = checkWednesday;
  const day4 = checkThursday;
  const day5 = checkFriday;
  const day6 = checSaturday;
  const day7 = checkSunday;
  const Gendre1 = '';
  const Gendre2 = '';
  const Gendre3 = '';
  const level1 = checkFirstLevel;
  const level2 = checkSecondLevel;
  const level3 = checkThirdLevel;

  function data(table) {
    let rightData;
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
      Gendre1 === ''
    && Gendre2 === ''
    && Gendre3 === ''
    );
    const levelfiltrenotactive = (
      level1 === ''
    && level2 === ''
    && level3 === ''
    );

    rightData = table.filter((el) => {
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
  el.Gendre === Gendre1
    || el.Gendre === Gendre2
    || el.Gendre === Gendre3
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
        <FiltersList
          Monday={handleMonday}
          Tuesday={handleTuesday}
          Wednesday={handleWednsday}
          Thursday={handleThursday}
          Friday={handleFriday}
          Saturday={handleSaturday}
          Sunday={handleSunday}
          FirstLevel={handleFirstLevel}
          SecondLevel={handleSecondLevel}
          ThirdLevel={handleThirdLevel}
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
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_type: PropTypes.string.isRequired,
    organismName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default React.memo(ActivityList);
