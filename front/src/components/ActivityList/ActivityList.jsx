import React from 'react';
import FiltersList from './Filters/filters/FiltersList';
import PostsList from './Posts/Posts/PostsList';

import './activityListStyles.css';

function ActivityList() {
  return (
    <div>
      <div className="container-activity">
        <FiltersList />
        <PostsList />
      </div>
    </div>
  );
}

export default React.memo(ActivityList);
