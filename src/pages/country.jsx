import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

export default function Country() {
  const [country, setCountry] = useState(null)

  

  const Params= useParams()
  console.log('Params', Params)
  const url = `https://restcountries.com/v3.1/name/${Params.countryName}`

  useEffect(() => {
    async function displayOneCountry(){

      try {
          const countries= await axios.get(url)
          const  countriesBox = countries.data;
          console.log('countriesBox',countriesBox[0]);
    
          setCountry(countriesBox[0])
          
          console.log('hello', country)
         
    
      } catch(error) {
          console.log(error)
      }
    
    
    }
    
      displayOneCountry()
    
},[Params.countryName])


if (!country) {
  return <div>Loading...</div>;
}


console.log('knkjnkinlinlihnjknjknjkn', country)


  return (
    <div>
      <Navbar/>
      <h1>Get To Know More</h1>
    <div>

      
      <h1>{country.name.common}</h1>
      <a  href={country.maps.googleMaps} alt={country.maps.alt}>Map Link</a>
      <img src={country.flags.png} alt={country.flags.alt}/>
      <img src={country.coatOfArms.png} alt={country.coatOfArms.alt} />


    </div>
    </div>
  );
}

