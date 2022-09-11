import React, { useState } from 'react'
import NavbarLogged from './NavbarLogged'
import Footer from './Footer'
const UserOrdering = () => {
   
    const [partyType, setPartyType] = useState("")
    const [capacity, setCapacity] = useState(0)

    const foodOptions = ["Vegan", "Vegetarian", "Halal", "Kosher", "Keto", "Dairy-Free", "No food"]
    const [foodType, setFoodType] = useState(foodOptions[5])
    const [specificFood, setSpecificFood] = useState("")

    const drinkOptions = ["Hard Drinks", "Soft Drinks" , "No Drinks"]
    const [drinkType, setDrinkType] = useState(foodOptions[2])
    const [specificDrink, setSpecificDrink] = useState("")


    const [seating, setSeating] = useState(false)
    const [utensils, setUtensils] = useState(false)
    const [speakers, setSpeakers] = useState(false)
    const [microphone, setMicrophone] = useState(false)
    const [dj, setDj] = useState(false)
    const [discoBall, setDiscoBall] = useState(false)
    const [otherPartySpecs, setOtherParySpecs] = useState('')


    


  return (
    <>
    <NavbarLogged/>
    <div className='userpage'>
        <div className="order-form">
            <h1>Create your specialized event below: </h1>
            <form className='' >
                <li className='title'>Event Details</li>             
                <input type="text" placeholder='Party type' value={partyType} onChange={(e)=> setPartyType(e.target.value)} required></input>
                <input type="number" placeholder='Capacity' value={capacity} onChange={(e)=> setCapacity(e.target.value)} required></input>

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
                <input type="text" placeholder="Other Specific Details" value={specificFood}  onChange={(e)=> setSpecificFood(e.target.value)} ></input>
                <br></br>
                <select className="drink-dropdown"
                    value={drinkType} 
                    onChange={e => setDrinkType(e.target.value)}>
                        {drinkOptions.map((value) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                         ))}
                </select>
                <input type="text" placeholder="Other drink prefrences" value={specificDrink} onChange={(e)=> setSpecificDrink(e.target.value)} ></input>
                <br></br>

                <li className='title'>Catering specifics:  </li>
                <input type="checkbox" id="Chairs&Tables" name="Chairs&Tables" checked={seating} onChange={(e)=> setSeating(e.target.checked)} ></input>
                <label>Chair and Tables</label>
                <br></br>

                <input type="checkbox" id="Utensils" name="Utensils" checked={utensils} onChange={(e)=> setUtensils(e.target.checked)}  ></input>
                <label>Utensils</label>
                <br></br>



                <li className='title'>Additional Party specifics:  </li>
                <input type="checkbox" id="speaker" name="speakers" value="speakers" checked={speakers} onChange={(e)=> setSpeakers(e.target.checked)} ></input>
                <label>Speakers</label>
                <br></br>
                <input type="checkbox" id="microphone" name="microphone" value="microphone" checked={microphone} onChange={(e)=> setMicrophone(e.target.checked)} ></input>
                <label>microphone</label>
                <br></br>
                <input type="checkbox" id="DJ" name="DJ" value="DJ" checked={dj} onChange={(e)=> setDj(e.target.checked)} ></input>
                <label>DJ</label>
                <br></br>
                <input type="checkbox" id="Disco Ball" name="Disco Ball" value="Disco ball" checked={discoBall} onChange={(e)=> setDiscoBall(e.target.checked)}></input>
                <label>Disco Ball</label>
                <br></br>
                <input type="text" placeholder='other' value={otherPartySpecs} onChange={(e)=> setOtherParySpecs(e.target.value)} ></input>
                <br></br>
                {/* <textarea placeholder='Enter any other requests to be done' ></textarea> */}
                <br></br>

                <input type="submit"></input>

                <li className='title'>Date, Location and Phone number:  </li>


                <input type="date"></input>
                <input type="tel" placeholder='phone-number'></input>
                <br></br>
                <input type="text"  placeholder='Enter address'></input>

                

                

                <input type="submit"></input>








            </form>
        </div>
        
        

        

    </div>
    <Footer/>
    </>
  )
}

export default UserOrdering