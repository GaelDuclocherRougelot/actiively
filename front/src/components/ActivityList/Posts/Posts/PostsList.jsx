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
        <div className="results-container">
          {results.map((post) => (
            <Post
              code_activity={post.code_activity}
              organismName={post.organism_name}
              name={post.activity_name}
              zip_code={post.zip_code}
              city={post.city}
              image_url={post.image_url}
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
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_type: PropTypes.string.isRequired,
    organismName: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Posts.defaultProps = {};

export default React.memo(Posts);
