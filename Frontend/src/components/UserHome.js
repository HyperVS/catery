import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLogged from './NavbarLogged';
import Footer from './Footer';
import "../styles/UserHome.css"; 
import {useCurrentUser} from "../hooks/useCurrentUser";
import {auth} from "../components/Firebase";
import axios from "axios";
const UserHome = () => {
  
     
     const user = useCurrentUser();
     console.log(user);
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