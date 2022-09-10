import "../styles/Home.css";

const Home = () => {
  return (
    <div className='Home'>

        <h1 className="home-title">Connecting Clients to <br/>Professional Event Planners</h1>
        <div className='home-register'>
                    <div className="home-register__client">
                        <h1 className="home-title__sm">For Users</h1>
                        <p className="home-register__text">We are the leading software to connect you to the best even planners whereever you are.</p>
                        <a href="#!" className="btn btn-white">Start Planning!</a>
                    </div>
                    <div className="home-register__service">
                      <h1 className="home-title__sm">For Contracters</h1>
                      <p className="home-register__text">Are you good at organizing events? We are the only step to take for you to find your customer.</p>
                      <a href="#!" className="btn btn-black">Start taking Clients</a>
                    </div>
        </div>

    </div>
  )
}

export default Home