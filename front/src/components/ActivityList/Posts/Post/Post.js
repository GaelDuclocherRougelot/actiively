import React from 'react';
import './postStyles.css';

function Post() {
  return (
    <div>

      <article className="container-post">
        <div className="imagestyle">
          <img className="image" alt="Piano" src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </div>
        <p className="post-title">PIANO</p>
        <strong className="post-zip">69000 LYON</strong>
        <strong className="post-zip">Lundi 18h00-20h00</strong>
        <p className="post-price">
          150 € par trimestre
        </p>
      </article>
    </div>
  );
}

export default React.memo(Post);
