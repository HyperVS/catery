import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLogged from './NavbarLogged';
import Footer from './Footer';
import "../styles/UserHome.css"; 

const UserHome = () => {
  return (
    <>
      <NavbarLogged/>
      <div className='UserHome'>
      <div className='UserHome-left'>
        <Link to="/userOrder">
        <button className='btn btn-black UserHomeBtn'>Create New Event</button>
        </Link>
      </div>

      <div className='UserHome-right'>
        <Link to="/userdashboard">
        <button className="btn btn-black UserHomeBtn">My Events</button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserHome