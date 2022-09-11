import { useState } from "react";
import axios from "axios"; 
import {auth} from "../components/Firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignupContractor() { 
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const signUp = async () => {  
        await axios.post("http://localhost:8080/v1/contractors/create", {
            displayName, phone, email, password
        })
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/", {replace: true});
    }
    return (
        <div className="login">
            <div className="container">
                <h1 className="login-title"> Catery </h1>
                <h3> Contractor Sign Up </h3>
                <input onChange={(e) => setDisplayName(e.target.value)} type="text" placeholder="Full Name"/>
                <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number"/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button onClick={signUp}>Sign up</button>
            </div>
        </div>
    );
}