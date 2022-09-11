import { Routes, Route, Navigate } from 'react-router-dom';
import UserOrdering from "../components/UserOrdering";
import UserHome from "../components/UserHome";
import UserDashboard from "../components/UserDashboard";
import Account from "./Account";
import ContractorDashboard from '../components/ContractorDashboard';
import ContractorDashCardOpen from '../components/ContractorDashCardOpen';
import { useCurrentUser } from '../hooks/useCurrentUser';



export default function AppStack(){
    const user = useCurrentUser(); 
    function xxx() { 
        if(user?.role == "Client") { 
            return <UserHome/>
        } else if(user?.role == "Contractor") { 
            return <ContractorDashboard />
        } else { 
            setTimeout(() => xxx(),0)
        }
    }
    return (
       <>

        <Routes>
            
          <Route path="/" element={xxx()}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/userOrder" element={<UserOrdering></UserOrdering>} />
          <Route path="/userDashboard" element={<UserDashboard></UserDashboard>}></Route>
          <Route path='/contractordash' element={<ContractorDashboard></ContractorDashboard>}></Route>
          <Route path='/contractdash/item/:id' element={<ContractorDashCardOpen></ContractorDashCardOpen>}></Route>
        </Routes>
</>


    )
}

