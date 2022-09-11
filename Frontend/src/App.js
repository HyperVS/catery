
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




export default function App() {
  return (
<>

        <Navbar></Navbar>
        <Home/>

        <Footer></Footer>
</>
  );
}

