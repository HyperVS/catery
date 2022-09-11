import "../styles/Login.css"
import "../styles/index.css"
import { auth } from "../components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {useNavigate} from "react-router-dom"; 
import {useCurrentUser} from "../hooks/useCurrentUser";
export  default function Login() { 
    const navigate = useNavigate();
    // const user = useCurrentUser();
    // console.log(user);
     

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = () => { 
        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            navigate("/", {replace:true})
        })
        .catch(err => console.error(err))
    };
    return (
        <div className="login">
            <div className="container">
                <h1 className="login-title"> Catery </h1>
                <h3> Login </h3>
                <input onChange={ (event)=>setEmail(event.target.value) } type="text" placeholder="Email"/>
                <input onChange={ (event) => setPassword(event.target.value) } type="password" placeholder="****"/>
                <a href="#!"> Forgot Your Password? </a>
                <button onClick={signIn}>Login</button>
            </div>
        </div>
    );
} 