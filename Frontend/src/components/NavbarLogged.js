import {Link} from "react-router-dom"
import "../styles/NavbarLogged.css";
import { useCurrentUser } from "../hooks/useCurrentUser";
export default function NavbarLogged() { 
    const user = useCurrentUser();
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
                Hello, {user?.displayName}!
            </Link> 
       </div>    

    </nav>
    );
}