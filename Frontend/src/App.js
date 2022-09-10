import ReactDOM from "react-dom/client";

import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserOrdering from "./components/UserOrdering";
import UserIn from "./components/UserIn";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
     <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/userin" element={<UserIn></UserIn>}></Route>
          <Route path="/UserOrdering" element={<UserOrdering></UserOrdering>} />
          <Route path="/userdashboard" element={<UserDashboard></UserDashboard>}></Route>


        </Routes>
        <Footer></Footer>
    </Router>
    
  );
}

export default App;
