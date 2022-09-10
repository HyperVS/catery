import "../styles/Login.css";
import {auth} from "../components/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import axios from "axios"; 


export default function SignupClient() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const signUp = () => {  
        axios.post("http://localhost:8080/v1/clients/create", {email, password})
    }
    return (
        <div className="login">
            <div className="container">
                <h1 className="login-title"> Catery </h1>
                <h3> Client Sign Up </h3>
                <input onChange={setName} type="text" placeholder="Full Name"/>
                <input onChange={setNumber} type="text" placeholder="Phone Number"/>
                <input onChange={setEmail} type="text" placeholder="Email"/>
                <input onChange={setPassword} type="password" placeholder="****"/>
                <button onClick={signUp}>Login</button>
            </div>
        </div>
    );
}