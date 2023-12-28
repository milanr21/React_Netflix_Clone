import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/all';

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt='logo' />
      <div>
        <Link to='/tvshows'>TV Shows</Link>
        <Link to='/tvshows'>Movies</Link>
        <Link to='/tvshows'>Recently Added</Link>
        <Link to='/tvshows'>My List</Link>
      </div>
      <GoSearch />
    </nav>
  );
};

export default Header;
