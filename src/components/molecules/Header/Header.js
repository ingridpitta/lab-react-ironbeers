import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/logoIronbeers.svg';
import './header.css';

const Header = () => {
  return (
    <nav className="header--container">
      <Link to="/">
        <Logo style={{ width: '40px', height: '35px', marginTop: '5px' }} />
      </Link>
    </nav>
  );
};

export default Header;
