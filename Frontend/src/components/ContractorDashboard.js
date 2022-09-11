import React from 'react'
import DashboardCard from './DashboardCard'
import DashboardCardContract from './DashboardCardContract'
import Footer from './Footer'
import NavbarLogged from './NavbarLogged'
let arr = [{id: 0, PartyType: "Strip club", Capacity: 50, Price: 500, FoodType: 'haram', OtherFoodspec: "Please inlude haram pork", Drinks: "Hard Drinks", OtherDrinkDetails: "please include all haram drinks", ChairAndTables: true, Utensils: true, speakers: true, microphone: true, DJ: true, DiscoBall: true, PartySpecs: "Extra Haram and neswan and banat and neyaka w neek el denya", ExtraRequests: "Get all the mohammed elmins", date: "13/13/2013", Address:"Satan's home", number: "6465789556" }, {id: 1, PartyType: "Strip club", Capacity: 50, FoodType: 'haram', OtherFoodspec: "Please inlude haram pork", Drinks: "Hard Drinks", OtherDrinkDetails: "please include all haram drinks", ChairAndTables: true, Utensils: true, speakers: true, microphone: true, DJ: true, DiscoBall: true, PartySpecs: "Extra Haram and neswan and banat and neyaka w neek el denya", ExtraRequests: "Get all the mohammed elmins", date: "13/13/2013", Address:"Satan's home", number:"6465789556" }, {id: 1, PartyType: "Strip club", Capacity: 50, FoodType: 'haram', OtherFoodspec: "Please inlude haram pork", Drinks: "Hard Drinks", OtherDrinkDetails: "please include all haram drinks", ChairAndTables: true, Utensils: true, speakers: true, microphone: true, DJ: true, DiscoBall: true, PartySpecs: "Extra Haram and neswan and banat and neyaka w neek el denya", ExtraRequests: "Get all the mohammed elmins", date: "13/13/2013", Address:"Satan's home", number:"6465789556" },{id: 1, PartyType: "Strip club", Capacity: 50, FoodType: 'haram', OtherFoodspec: "Please inlude haram pork", Drinks: "Hard Drinks", OtherDrinkDetails: "please include all haram drinks", ChairAndTables: true, Utensils: true, speakers: true, microphone: true, DJ: true, DiscoBall: true, PartySpecs: "Extra Haram and neswan and banat and neyaka w neek el denya", ExtraRequests: "Get all the mohammed elmins", date: "13/13/2013", Address:"Satan's home", number:"6465789556" },{id: 1, PartyType: "Strip club", Capacity: 50, FoodType: 'haram', OtherFoodspec: "Please inlude haram pork", Drinks: "Hard Drinks", OtherDrinkDetails: "please include all haram drinks", ChairAndTables: true, Utensils: true, speakers: true, microphone: true, DJ: true, DiscoBall: true, PartySpecs: "Extra Haram and neswan and banat and neyaka w neek el denya", ExtraRequests: "Get all the mohammed elmins", date: "13/13/2013", Address:"Satan's home", number:"6465789556" }]
const ContractorDashboard = () => {
    return (
        <>
        <NavbarLogged></NavbarLogged>
        <div className='backofdash-contractor'>
            
            {arr.map(event =>(
                
                <DashboardCardContract key={event.id} PartyType={event.PartyType} Capacity={event.Capacity} FoodType={event.FoodType} OtherFoodspec={event.OtherFoodspec} Drinks={event.Drinks} OtherDrinkDetails={event.OtherDrinkDetails} ChairAndTables={event.ChairAndTables} Utensils={event.Utensils} speakers={event.speakers} microphone={event.microphone} DJ={event.DJ} DiscoBall={event.DiscoBall} PartySpecs={event.PartySpecs} ExtraRequests={event.ExtraRequests} date={event.date} Address={event.Address} number={event.number} price={event.Price}> </DashboardCardContract>
            ))} 
            <Footer></Footer>
        </div>
        </>
      )
}

export default ContractorDashboard