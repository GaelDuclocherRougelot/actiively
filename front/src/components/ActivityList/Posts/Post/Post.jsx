/* eslint-disable react/no-unused-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './postStyles.css';

function Post({
  code_activity,
  name,
  organismName,
  image_url,
  zip_code,
  city,
  day,
  price,
  price_type,
}) {
  return (
    <div>
      <article className="container-post">
        <Link to={`/activity/${code_activity}`} className="imagestyle">
          <img className="image" alt={name} src={image_url} />
        </Link>
        <p className="post-title">{name}</p>
        <p className="post-organism">{organismName}</p>
        <strong className="post-zip">
          {zip_code}
          {' '}
          {city}
        </strong>
        <strong className="post-zip">
          {day}
        </strong>
        <p className="post-price">
          {price}
          {' '}
          €
          {' '}
          {price_type}
        </p>
      </article>
    </div>
  );
}

Post.propTypes = {
  code_activity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  price_type: PropTypes.string.isRequired,
  organismName: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
};

Post.defaultProps = {};

export default React.memo(Post);
