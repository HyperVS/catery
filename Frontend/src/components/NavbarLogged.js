import {Link} from "react-router-dom"
import "../styles/NavbarLogged.css";
export default function NavbarLogged() { 
    return (
        <nav className="navbar-logged">
        <div>
        <h2 className='navbar-logged__logo'>
        <Link style={{textDecoration: 'none'}}  to="/">
           Catery
          </Link>
        </h2>
          
        </div>
        <div > 
            <Link to="/account" className="account-link">
                Hello, User!
            </Link> 
       </div>    

    </nav>
    );
}