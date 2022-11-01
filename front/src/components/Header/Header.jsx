import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import './headerStyles.scss';

function Header() {
return (
    <header className='appheader'>
        <FontAwesomeIcon icon={faLightbulb} size='3x'/>
        <h1 className='appheader-title'>Actiively</h1>
        {/* Login button will become an icon on mobile */}
        <button className='appheader-login'>Connexion</button>
        <FontAwesomeIcon icon={faUser} size='2x' className='appheader-login-mobile'/>
    </header>
);
}

export default React.memo(Header);