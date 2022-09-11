import "../styles/Account.css"
import axios from "axios"; 
import {signOut} from "firebase/auth";
export default function Account() { 
    return(
        <>
        <p> Name: Name </p>
        <p> Email: Email </p>
        <p> Role: Role </p>
        <p> Rating: Rating </p>
        <button className="btn btn-logout" onClick={() => signOut()}> Log Out </button>
        </>
    );
}