import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import './headerStyles.scss';

function Header() {
  return (
    <header className="appheader">
      <a href="/">
        <FontAwesomeIcon className="appheader-icon" icon={faLightbulb} size="3x" />
      </a>
      <h1 className="appheader-title">Actiively</h1>
      {/* Login button will become an icon on mobile */}
      <a href="/login">
        <button type="button" className="appheader-login">Connexion</button>
        <FontAwesomeIcon icon={faUser} size="2x" className="appheader-login-mobile" />
      </a>
    </header>
  );
}

export default React.memo(Header);
