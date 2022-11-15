/* eslint-disable react/no-unused-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './postStyles.css';

function Post({
  name,
  city,
  day,
  image_url,
  organismName,
  price,
  price_type,
  zip_code,
  code_activity,
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
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  organismName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  price_type: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  code_activity: PropTypes.number.isRequired,
};

Post.defaultProps = {};

export default React.memo(Post);
