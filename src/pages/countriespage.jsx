import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Countriespage() {

    const [country, setCountry] = useState([]);
 const url = "https://restcountries.com/v3.1/all"
console.log(url)

useEffect(() => {
    async function displayAllCountries(){

        try {
            const countries= await axios.get(url)
            const  countriesBox = countries.data;
           setCountry(countriesBox)

        } catch(error) {
            console.log(error)
        }
      

     }
    
        displayAllCountries()
    
      
    


},[])


console.log('country', country);


return(
    <>
        <div>
            <Navbar />
            <h1>Countries </h1>
        </div>
        <div className='outer-div'>
            {country.slice(30 , 40).map((item) => (
         <div className='inner-div'>
            <h2>{item.name.common}</h2>
            <h3>{item.name.official}</h3>
            <img src={item.flags.png} alt={item.flags.alt} className='flag' />
            {/* <li>{item.languages.ell}</li> */}
            <button className='btn'><Link to={`/country/${item.name.common}`}>Learn More</Link></button>
         </div>

            ))}
        </div>
    </>
)
}


 


