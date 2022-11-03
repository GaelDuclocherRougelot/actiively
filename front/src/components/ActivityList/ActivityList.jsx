import React from 'react';
import PropTypes from 'prop-types';

import FiltersList from './Filters/filters/FiltersList';
import PostsList from './Posts/Posts/PostsList';

import './activityListStyles.css';

function ActivityList({
  results,
}) {
  return (
    <div>
      <div className="container-activity">
        <FiltersList />
        <PostsList
          results={results}
        />
      </div>
    </div>
  );
}

ActivityList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    price_type: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    organismName: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    organism_description: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

ActivityList.defaultProps = {};

export default React.memo(ActivityList);
