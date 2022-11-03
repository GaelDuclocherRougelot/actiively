import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import './postsListStyles.css';

function Posts({
  results,
}) {
  return (
    <div>
      <h2 className="number-result">
        {results.length}
        {' '}
        résultats correspondent à votre recherche
      </h2>
      <main className="posts">
        <div className="container">
          {results.map((post) => (
            <Post
              code_activity={post.code_activity}
              name={post.name}
              zip_code={post.zip_code}
              city={post.city}
              image_url={post.image_url}
              description={post.description}
              day={post.day}
              price={post.price}
              price_type={post.price_type}
            />
          ))}

        </div>
      </main>
    </div>
  );
}

Posts.propTypes = {
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

Posts.defaultProps = {};

export default React.memo(Posts);
