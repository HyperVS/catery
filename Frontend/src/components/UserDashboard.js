import {useState,useEffect} from 'react'
import DashboardCard from './DashboardCard'
import { useCurrentUser } from '../hooks/useCurrentUser';
import axios from "axios";
import NavbarLogged from "./NavbarLogged";
import {auth} from "../components/Firebase";

const UserDashboard = () => {
  const [arr, setArr] = useState([]);
  // const user = useCurrentUser();
  useState( () => {
    const  getEvents = async ()=> {
        try{ 
            const result = await axios.get(`http://localhost:8080/v1/events/getByUserId?id=${auth.currentUser.uid}`);
            setArr(result.data);
        }catch(err) { 
          console.error(err);
        }
    } 
    getEvents(); 
  }, [])

  // const arr =  || [];
  return (

    <div className='backofdash'>
      <NavbarLogged/>

        {arr.map(event =>(
            
            <DashboardCard key={event._id} PartyType={event.name} Capacity={event.capacity} FoodType={event.requests.food} OtherFoodspec={event.requests.foodSpec} Drinks={event.requests.drinks} OtherDrinkDetails={event.requests.drinkSpec} ChairAndTables={event.requests.party.seating} Utensils={event.requests.party.utensils} speakers={event.requests.party.speakers} PartySpecs={event.requests.party.other} date={event.date} Address={event.location}> </DashboardCard>
        ))} 
    </div>
  )




}

export default UserDashboard