import ReactDOM from "react-dom/client";

import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
     <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
            
        </Routes>
    </Router>
    
  );
}

export default App;
