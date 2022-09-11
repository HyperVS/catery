import "../styles/Account.css"
import {auth} from "../components/Firebase"; 
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
export default function Account() {
    const navigate = useNavigate(); 
    const user = useCurrentUser(); 
    return(
        <>
        <p> Name: {user?.displayName}</p>
        <p> Email: {user?.email} </p>
        <p> Phone: {user?.phone} </p>

        <p> Role: {user?.role} </p>
        {/* <p> Rating: Rating </p> */}
        <button className="btn btn-logout" onClick={() => { 
            navigate("/", {replace:true});
            signOut(auth);

        }}> Log Out </button>
        </>
    );
}