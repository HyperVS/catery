import ReactDOM from "react-dom/client";

import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserOrdering from "./components/UserOrdering";

function App() {
  return (
    <Router>
     <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/UserOrdering" element={<UserOrdering></UserOrdering>} />


        </Routes>
        <Footer></Footer>
    </Router>
    
  );
}

export default App;
