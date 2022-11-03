import React from 'react';
import Post from '../Post/Post';
import './postsListStyles.css';

function Posts() {
  return (
    <div>
      <h2 className="number-result">4 résultats correspondent à votre recherche</h2>
      <main className="posts">
        <div className="container">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
}

export default React.memo(Posts);
