import React from 'react'

const Home = () => {
  return (
    <div className='home-content'>

      <div className='home-description-div'>
        <h1 className='home-description'>Connecting Clients to Professional event planners</h1>
        <div className='register'>
                    <div className='Users-div'>
                      <h2>For Users</h2>
                      <h3>We are the leading software to connect you to the best even planners</h3>
                      <button className='btn'>Start Planning!</button>
                    </div>
                    <div className='Contractors-div'>
                      <h2>For Contractors</h2>
                      <h3>We are the leading software to connect you to customers</h3>
                      <button className='btn'>Start taking Clients</button>
                    </div>
        </div>
      </div>

      <img className='Home-right' src='https://i.pngimg.me/thumb/f/720/comhiclipartiolni.jpg'>
      
      </img>

    </div>
  )
}

export default Home