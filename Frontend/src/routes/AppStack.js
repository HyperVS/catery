import { Routes, Route } from 'react-router-dom';
import UserOrdering from "../components/UserOrdering";
import UserHome from "../components/UserHome";
import UserDashboard from "../components/UserDashboard";
import Account from "./Account";
import ContractorDashboard from '../components/ContractorDashboard';
import ContractorDashCardOpen from '../components/ContractorDashCardOpen';
export default function AppStack(){
    return (
       <>
               <Routes>
          {/* <Route path="/" element={<Home></Home>} /> */}
          <Route path="/userHome" element={<UserHome></UserHome>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/userOrder" element={<UserOrdering></UserOrdering>} />
          <Route path="/userDashboard" element={<UserDashboard></UserDashboard>}></Route>
          <Route path='/contractordash' element={<ContractorDashboard></ContractorDashboard>}></Route>
          <Route path='/contractdash/item/:id' element={<ContractorDashCardOpen></ContractorDashCardOpen>}></Route>
        </Routes>
</>


    )
}

