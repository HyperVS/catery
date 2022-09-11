import React from 'react'
import { Link } from 'react-router-dom'

const UserIn = () => {
  return (
    <div className='UserIn'>
      
      <div className='UserIn-left'>
        <Link to="/UserOrdering">
        <button className='UserInBtn'>Create New Event</button>
        </Link>
      </div>

      <div className='UserIn-right'>
        <Link to="/userdashboard">
        <button class="UserInBtn">My Events</button>
        </Link>
      </div>



    </div>
  )
}

export default UserIn