import "../styles/Login.css"

export default function Login() { 
    return (
        <div className="login">
            <div className="container">
                <h1 className="login-title"> Catery </h1>
                <h3> Login </h3>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="****"/>
                <a href="#!"> Forgot Your Password? </a>
                <input type="submit" value="Login"/>
            </div>
        </div>
    );
} 