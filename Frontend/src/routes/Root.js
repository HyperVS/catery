import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from "./Login";
import App from "../App";
export default function Root() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/create-account" element={<CreateAccount/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
    );
 }