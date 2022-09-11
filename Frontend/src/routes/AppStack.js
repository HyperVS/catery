import { Routes, Route, Navigate } from 'react-router-dom';
import UserOrdering from "../components/UserOrdering";
import UserHome from "../components/UserHome";
import UserDashboard from "../components/UserDashboard";
import Account from "./Account";
export default function AppStack(){
    return (
       <>
               <Routes>
          <Route path="/" element={<Navigate to="/userHome"/>} />
          <Route path="/userHome" element={<UserHome></UserHome>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/userOrder" element={<UserOrdering></UserOrdering>} />
          <Route path="/userDashboard" element={<UserDashboard></UserDashboard>}></Route>
        </Routes>
</>


    )
}

