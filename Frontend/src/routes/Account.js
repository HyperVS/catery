import "../styles/Account.css"
import axios from "axios";
import {auth} from "../components/Firebase"; 
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Account() {
    const navigate = useNavigate(); 

    return(
        <>
        <p> Name: Name </p>
        <p> Email: Email </p>
        <p> Role: Role </p>
        <p> Rating: Rating </p>
        <button className="btn btn-logout" onClick={() => { 
            navigate("/", {replace:true});
            signOut(auth);

        }}> Log Out </button>
        </>
    );
}