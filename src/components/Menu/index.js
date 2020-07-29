import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="ANIMIX logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
               Temporada Nova
            </Button>
        </nav>

    );
}

export default Menu;








