import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../assets/icons/Homescreen_Icons/Home.svg';
import Search from '../../assets/icons/Homescreen_Icons/Search.svg';
import Library from '../../assets/icons/Homescreen_Icons/Library.svg';
import Community from '../../assets/icons/Homescreen_Icons/Community_Icon.svg';
import More from '../../assets/icons/Homescreen_Icons/hamburgermenu.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <nav className="nav">
    <div className="nav__div">
      <Link to="/home">
        <img className="nav__icon" src={Home} alt="home icon" />
        <p className="nav__title">Home</p>
      </Link>
      </div>

        <div className="nav__div">
        <img className="nav__icon" src={Search} alt="search icon" />
        <p className="nav__title">Search</p>
      </div>

      <div className="nav__div">
        <img className="nav__icon" src={Library} alt="library icon" />
        <p className="nav__title">Library</p>
      </div>

      <div className="nav__div">
        <img className="nav__icon" src={Community} alt="community icon" />
        <p className="nav__title">Community</p>
      </div>

      <div className="nav__div">
        <img className="nav__icon" src={More} alt="more icon" />
        <p className="nav__title">More</p>
      </div>

    </nav>
  );
};

export default Footer;
