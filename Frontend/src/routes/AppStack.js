import { Routes, Route } from 'react-router-dom';
import UserOrdering from "../components/UserOrdering";
import UserHome from "../components/UserHome";
import UserDashboard from "../components/UserDashboard";
export default function AppStack(){
    return (
       <>
               <Routes>
          {/* <Route path="/" element={<Home></Home>} /> */}
          <Route path="/userHome" element={<UserHome></UserHome>}></Route>
          <Route path="/userOrder" element={<UserOrdering></UserOrdering>} />
          <Route path="/userDashboard" element={<UserDashboard></UserDashboard>}></Route>
        </Routes>
</>

    )
}