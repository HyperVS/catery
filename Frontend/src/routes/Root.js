import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Signup from "./Signup";
import SignupContractor from './SignupContractor';
import SignupClient from './SignupClient';
import App from "../App";
export default function Root() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/create-account" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup-client" element={<SignupClient/>}></Route>
            <Route path="/signup-contractor" element={<SignupContractor/>}></Route>
        </Routes>
        </BrowserRouter>
    );
 }