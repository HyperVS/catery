import {useState, useEffect} from 'react'
import axios from 'axios'
import DashboardCard from './DashboardCard'
import DashboardCardContract from './DashboardCardContract'
import Footer from './Footer'
import NavbarLogged from './NavbarLogged'
const ContractorDashboard = () => {
    const [arr, setArr] = useState([]);
  // const user = useCurrentUser();
  useState( () => {
    const  getEvents = async ()=> {
        try{ 
            const result = await axios.get(`http://localhost:8080/v1/events/`);
            setArr(result.data);
        }catch(err) { 
          console.error(err);
        }
    } 
    getEvents(); 
  }, [])
    console.log(arr)
    return (
        <>
        <NavbarLogged></NavbarLogged>
        <div className='backofdash-contractor'>
        {arr.map(event =>(
            
            <DashboardCard key={event._id} PartyType={event.name} Capacity={event.capacity} FoodType={event.requests.food} OtherFoodspec={event.requests.foodSpec} Drinks={event.requests.drinks} OtherDrinkDetails={event.requests.drinkSpec} ChairAndTables={event.requests.party.seating} Utensils={event.requests.party.utensils} speakers={event.requests.party.speakers} PartySpecs={event.requests.party.other} date={event.date} Address={event.location} > </DashboardCard>
        ))} 
            <Footer></Footer>
        </div>
        </>
      )
}

export default ContractorDashboard