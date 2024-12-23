import { NavLink } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <NavLink to={ROUTES.HOME} className='nav'>
          Home
        </NavLink>
        <NavLink to={ROUTES.USERS} className='nav'>
          Users
        </NavLink>
        <NavLink to={ROUTES.POSTS} className='nav'>
          Posts
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar