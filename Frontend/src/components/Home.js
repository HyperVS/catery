import "../styles/Home.css";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
    <div className='Home'>

<h1 className="home-title">Connecting Clients to <br/>Professional Event Planners</h1>
<div className='home-register'>
            <div className="home-register__client">
                <h2 className="home-title__sm">For Users</h2>
                <h3 className="home-register__text">We are the leading software to connect you to the best even planners whereever you are.</h3>
                <a href="/create-account" className="btn btn-white">Start Planning!</a>
            </div>
            <div className="home-register__service">
              <h2 className="home-title__sm">For Contracters</h2>
              <h3 className="home-register__text">Are you good at organizing events? We are the only step to take for you to find your customer.</h3>
              <a href="/create-account" className="btn btn-black">Start taking Clients</a>
            </div>
            
</div>

</div>
<Footer/></>

  )
}

export default Home