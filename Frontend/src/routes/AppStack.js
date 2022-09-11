import { Routes, Route } from 'react-router-dom';
import UserIn from '../components/UserIn';
import UserOrdering from '../components/UserOrdering';
import ContractorDashboard from '../components/ContractorDashboard';
import UserDashboard from '../components/UserDashboard';
import UserHeader from '../components/UserHeader';
import ContractorDashCardOpen from '../components/ContractorDashCardOpen';
export default function AppStack(){
    return (
        
        <Routes>
        
        <Route path="/" element={<UserIn></UserIn>}></Route>
          <Route path="/UserOrdering" element={<UserOrdering></UserOrdering>} />
          <Route path="/userdashboard" element={<UserDashboard></UserDashboard>}></Route>
          <Route path='/Contractordash'  element = {<ContractorDashboard></ContractorDashboard>}></Route>
          <Route path="/contractdash/item/:id" element={<ContractorDashCardOpen></ContractorDashCardOpen>}></Route>
          
          </Routes>
    )
}

//