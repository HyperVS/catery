import React, { useState } from 'react'

const DashboardCard = ({PartyType, Capacity, FoodType, OtherFoodspec, Drinks, OtherDrinkDetails, ChairAndTables, Utensils, speakers, PartySpecs, date, Address}) => {

const [status, setStatus] = useState(false)

const flipper = () =>{
    
    setStatus(!status)
}

  return (
    <div className='card'> 
    <div className='flex-row'>
        <h1>{PartyType}</h1>
        <div>Capacity: {Capacity}</div>
        <div className='card-extra'>{date} <button onClick={()=>flipper()} class="btn more-info-btn">more info</button></div>
    </div>

    <div>
    {status==true &&
    <div className='title'>
         <li className='title'>Font & Drink: </li>
            <div className='sub-topic'>
                <div>Food Type: {FoodType}</div>
                <div> Other Food Specs: {OtherFoodspec}</div>
            </div>
            <div className='sub-topic'>
                <div>Drink Type: {Drinks}</div>
                <div> Other Food Specs: {OtherDrinkDetails}</div>
            </div>
        <li className='title'> Catering specifics: </li>
        <div className='catering-specs'>

            <div>
            <input type="checkbox" checked={ChairAndTables}></input>
            <label>Chairs and Tables</label>
            </div>

            <div>
            <input type="checkbox" checked={Utensils}></input>
            <label>Utensils</label>
            </div>

        

        </div>
        <li className='title'> Additional party specifics: </li>
        <div className='grid'>
             <div >
            <input type="checkbox" checked={speakers}></input>
            <label>Speakers</label>
            </div>

            {/* <div> */}
            {/* <input type="checkbox" checked={microphone}></input>
            <label>Microphone</label>
            </div>

            <div>
            <input type="checkbox" checked={DJ}></input>
            <label>DJ</label>
            </div>

            <div>
            <input type="checkbox" checked={DiscoBall}></input>
            <label>Disco Ball</label>
            </div> */}

            <div className='grid-double'>Additional Party specs: {PartySpecs}</div>
        </div>

        <li className='title'>Location: </li>
        <div className='address'> {Address}</div>



    
    </div>
        
    }
    </div>


    </div>
    
  )
}

export default DashboardCard