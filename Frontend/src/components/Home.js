import React from 'react'

const Home = () => {
  return (
    <div className='home-content'>

      <div className='home-left'>
        <h1>Connecting Clients to Professional event planners</h1>
        <div className='register'>
                    <div>
                      <h1>For Users</h1>
                      <div>We are the leading software to connect you to the best even planners</div>
                      <button>Start Planning!</button>
                    </div>
                    <div>
                      <h1>For Contracters</h1>
                      <div>We are the leading software to connect you to customers</div>
                      <button>Start taking Clients</button>
                    </div>
        </div>
      </div>

      <img className='Home-right' src='https://i.pngimg.me/thumb/f/720/comhiclipartiolni.jpg'>
      
      </img>

    </div>
  )
}

export default Home