import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './headerStyles.scss';

function Header() {
  return (
    <header className="appheader">
      <Link to="/">
        <FontAwesomeIcon className="appheader-icon" icon={faLightbulb} size="3x" />
      </Link>
      <h1 className="appheader-title">Actiively</h1>
      {/* Login button will become an icon on mobile */}
      <Link to="/login">
        <button type="button" className="appheader-login">Connexion</button>
        <FontAwesomeIcon icon={faUser} size="2x" className="appheader-login-mobile" />
      </Link>
    </header>
  );
}

export default React.memo(Header);
