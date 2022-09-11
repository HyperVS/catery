import "../styles/Signup.css"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
export default function Signup() { 
    return (
        <>
        <Navbar />
            <h1 className="signup-title">Sign up</h1>
            <div className="signup">
            <div className="signup-user"> 
                <h3>For Users</h3>
                <p>We are the leading software to connect you to the best<br/> eventplanners whereever you are. </p>
                <Link to="/signup-client">Sign Up</Link>
             </div>
            <div className="signup-service"> 
                <h3>For Service</h3>
                <p>Are you good at organizing events? We are the only step to take <br/> for you to find your customer.</p>
                <Link to="/signup-contractor">Sign Up</Link>
             </div> 
        </div>
        <Footer/>
        </>
    );
}