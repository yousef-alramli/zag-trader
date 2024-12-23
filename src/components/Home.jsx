import React from 'react';
import { ROUTES } from '../constants/routes';
import { NavLink } from 'react-router-dom';

import '../styles/home.scss';

const Home = () => {
  return (
    <div className='home'>
      <NavLink
        to={ROUTES.USERS}
        className='nav users'
      >
        Users
      </NavLink>
      <NavLink
        to={ROUTES.POSTS}
        className='nav'
      >
        Posts
      </NavLink>
    </div>
  )
}

export default Home