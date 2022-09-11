import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DashboardCardContract = ({PartyType, Capacity, FoodType, OtherFoodspec, Drinks, OtherDrinkDetails, ChairAndTables, Utensils, speakers, microphone, DJ, DiscoBall, PartySpecs, ExtraRequests, date, Address, number, price}) => {
    const [status, setStatus] = useState(false)

    const flipper = () =>{
        
        
    }
    
      return (
        <div className='card-contractor'> 
        <div className='flex-column'>
            <h1 className='event-type'>{PartyType}</h1>
            <div>Capacity: {Capacity}</div>
            <div>Price: {price}</div>
            <div className='card-extra'>{date} 
            <Link to={`/contractdash/item/:${PartyType}`}>
            <button className="btn more-info-btn">more info</button>
            </Link>
            </div>
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
    
                <div>
                <input type="checkbox" checked={microphone}></input>
                <label>Microphone</label>
                </div>
    
                <div>
                <input type="checkbox" checked={DJ}></input>
                <label>DJ</label>
                </div>
    
                <div>
                <input type="checkbox" checked={DiscoBall}></input>
                <label>Disco Ball</label>
                </div>
    
                <div className='grid-double'>Additional Party specs: {PartySpecs}</div>
            </div>
    
            <li className='title'>Location and Phone number: </li>
            <div className='address'> Address: {Address}</div>
            <div className='address'> Number: {number}</div>
    
    
    
        
        </div>
            
        }
        </div> 
    
    
        </div>
        
      )
    }

export default DashboardCardContract