import "../styles/Login.css";
import { useState } from "react";
import axios from "axios"; 

export default function SignupClient() {
    const [displayName, setDisplayName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const signUp = async () => {  
        await axios.post("http://localhost:8080/v1/clients/create", {
            displayName, phone, email, password
        })
    }
    return (
        <div className="login">
            <div className="container">
                <h1 className="login-title"> Catery </h1>
                <h3> Client Sign Up </h3>
                <input onChange={(e) => setDisplayName(e.target.value)} type="text" placeholder="Full Name"/>
                <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number"/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button onClick={signUp}>Sign up</button>
            </div>
        </div>
    );
}