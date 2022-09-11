import React, { useState } from 'react'
import NavbarLogged from './NavbarLogged'
import Footer from './Footer'
import axios from 'axios'
import {auth} from "../components/Firebase";
const UserOrdering = () => {
   
    const [partyType, setPartyType] = useState("")
    const [capacity, setCapacity] = useState(0)

    const foodOptions = ["Vegan", "Vegetarian", "Halal", "Kosher", "Keto", "Dairy-Free", "No food"]
    const [foodType, setFoodType] = useState(foodOptions[6])
    const [specificFood, setSpecificFood] = useState("")

    const drinkOptions = ["Hard Drinks", "Soft Drinks" , "No Drinks"]
    const [drinkType, setDrinkType] = useState(drinkOptions[2])
    const [specificDrink, setSpecificDrink] = useState("")


    const [seating, setSeating] = useState(false)
    const [utensils, setUtensils] = useState(false)
    const [speakers, setSpeakers] = useState(false)
    // PARTY OTHER
    const [otherPartySpecs, setOtherParySpecs] = useState('')
    const [date, setDate] = useState("");
    const [address, setAddress] = useState('');

    const createEvent = async () => { 
        
        try {
            const result = await axios.post(`http://localhost:8080/v1/events/create/`, {name:partyType, date, location:address, capacity,hostId: auth.currentUser.uid , requests: { 
                food: foodType, 
                foodSpec: specificFood,
                drinks: drinkType, 
                drinkSpec: specificDrink,
                party: {
                    seating, 
                    speakers,
                    utensils,
                    other: otherPartySpecs 
                    
                },

            }})
        } 
        
        catch (error) {
            console.error(error);
        }
    }
    


  return (
    <>
    <NavbarLogged/>
    <div className='userpage'>
        <div className="order-form">
            <h1>Create your specialized event below: </h1>
            <form className='' onSubmit={e => e.preventDefault()}>
                <li className='title'>Event Details</li>   
                <span className='mr-2'>Party title:</span>
                <input type="text" placeholder='Party type' value={partyType} className="input input-party" onChange={(e)=> setPartyType(e.target.value)} required></input>
                <br/>
                <span className='mr-2'>Number of people:</span>
                <input type="number" placeholder='Capacity' className='input input-capacity' value={capacity} onChange={(e)=> setCapacity(e.target.value)} required></input>

                <li className='title'>Food & Drink Details: </li>
                <select className='food-dropdown' 
                    value={foodType} 
                    onChange={e => setFoodType(e.target.value)}>
                        {foodOptions.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                         ))}
                </select>
                <input type="text" className='input' placeholder="Other Specific Details" value={specificFood}  onChange={(e)=> setSpecificFood(e.target.value)} ></input>
                <br></br>
                <select className="drink-dropdown"
                    value={drinkType} 
                    onChange={e => setDrinkType(e.target.value)}>
                        {drinkOptions.map((val) => (
                        <option value={val} key={val}>
                            {val}
                        </option>
                         ))}
                </select>
                <input type="text" className='input' placeholder="Other drink prefrences" value={specificDrink} onChange={(e)=> setSpecificDrink(e.target.value)} ></input>
                <br></br>

                <li className='title'>Additional specifics:  </li>
                <input type="checkbox" id="Chairs&Tables" name="Chairs&Tables" checked={seating} onChange={(e)=> setSeating(e.target.checked)} ></input>
                <label>Chair and Tables</label>
                <br></br>

                <input type="checkbox" id="Utensils" name="Utensils" checked={utensils} onChange={(e)=> setUtensils(e.target.checked)}  ></input>
                <label>Utensils</label>
                <br></br>



                <input type="checkbox" id="Speaker" name="Speakers" value="speakers" checked={speakers} onChange={(e)=> setSpeakers(e.target.checked)} ></input>
                <label>Speakers</label>
                <br></br>
                <input type="text" className="input" placeholder='other' value={otherPartySpecs} onChange={(e)=> setOtherParySpecs(e.target.value)} ></input>
                <br></br>
                {/* <textarea placeholder='Enter any other requests to be done' ></textarea> */}
                <br></br>


                <li className='title'>Date & Location  </li>

                {/* <input type="tel" placeholder='phone-number' className="input mr-2"></input> */}
                <input type="date" className="input "  onChange={e => setDate(e.target.value)}></input>
                <br></br>
                <input type="text" className="input mr-2" value={address} onChange={e=>setAddress(e.target.value)} placeholder='Enter address'></input>
                <input type="submit" className='input ' onClick={()=> {
                    console.log(typeof auth.currentUser.uid);
                    createEvent();
                }}  />








            </form>
        </div>
        
        

        

    </div>
    <Footer/>
    </>
  )
}

export default UserOrdering