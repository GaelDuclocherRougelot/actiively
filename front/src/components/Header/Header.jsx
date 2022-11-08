import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './headerStyles.scss';

function Header({
  isLogged,
}) {
  return (
    <header className="appheader">
      <Link to="/">
        <FontAwesomeIcon className="appheader-icon" icon={faLightbulb} size="3x" />
      </Link>
      <h1 className="appheader-title">Actiively</h1>
      {/* Login button will become an icon on mobile */}
      {/* If not logged, show login button */}
      {!isLogged && (
      <Link to="/login">
        <button type="button" className="appheader-button">Connexion</button>
        <FontAwesomeIcon icon={faUser} size="2x" className="appheader-button-mobile" />
      </Link>
      )}
      {/* If logged, show logout button */}
      {isLogged && (
        <div className="appheader-logout">
          <button type="button" className="appheader-button">Déconnexion</button>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" className="appheader-button-mobile" />
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  isLogged: PropTypes.func.isRequired,
};

export default React.memo(Header);
