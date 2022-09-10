import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div>
          <Link style={{textDecoration: 'none'}}  to="/">
           <h2 className='logo'>Catery</h2>
          </Link>
        </div>

        <div className='navbar-btns'>
          <Link to="/sign-in">
           <button className='btn log-in'>Log in</button>
          </Link>

          <Link to="sign-up">
           <button className='btn sign-up'>Sign up</button>
          </Link>
        </div>
        
    </div>
  )
}

export default Navbar