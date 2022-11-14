/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Post from '../ActivityList/Posts/Post/Post';

import './organismActivitiesStyles.scss';

function OrganismActivities({
  token,
}) {
  const [activities, setActivities] = useState([]);

  // Request to API to get activities of an organism
  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/organism/activities', {
        headers: {
          authorization: token,
        },
      });
      // Give data to state
      setActivities(response.data);
      console.log('fetchActivies :', response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  // useEffect so that data is fetched on mount
  useEffect(
    () => {
      fetchActivities();
    },
    [],
  );

  return (
    <div>
      <main className="posts">
        <div className="results-container">
          {activities.map((activity) => (
            <Post
              key={activity.code_activity}
              code_activity={activity.code_activity}
              name={activity.name}
              zip_code={activity.zip_code}
              city={activity.city}
              level={activity.level}
              gender={activity.gender}
              image_url={activity.image_url}
              day={activity.day}
              price={activity.price}
              price_type={activity.price_type}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

OrganismActivities.propTypes = {
  token: PropTypes.string.isRequired,
};

export default React.memo(OrganismActivities);
