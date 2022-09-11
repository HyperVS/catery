import React from 'react'
import DashboardCard from './DashboardCard'

let arr = [{id: 0, PartyType: "Strip club", Capacity: 50, FoodType: 'haram', OtherFoodspec: "Please inlude haram pork", Drinks: "Hard Drinks", OtherDrinkDetails: "please include all haram drinks", ChairAndTables: true, Utensils: true, speakers: true, microphone: true, DJ: true, DiscoBall: true, PartySpecs: "Extra Haram and neswan and banat and neyaka w neek el denya", ExtraRequests: "Get all the mohammed elmins", date: "13/13/2013", Address:"Satan's home" }]
const UserDashboard = () => {

  return (

    <div className='backofdash'>
        {arr.map(event =>(
            
            <DashboardCard key={event.id} PartyType={event.PartyType} Capacity={event.Capacity} FoodType={event.FoodType} OtherFoodspec={event.OtherFoodspec} Drinks={event.Drinks} OtherDrinkDetails={event.OtherDrinkDetails} ChairAndTables={event.ChairAndTables} Utensils={event.Utensils} speakers={event.speakers} microphone={event.microphone} DJ={event.DJ} DiscoBall={event.DiscoBall} PartySpecs={event.PartySpecs} ExtraRequests={event.ExtraRequests} date={event.date} Address={event.Address}> </DashboardCard>
        ))} 
    </div>
  )




}

export default UserDashboard