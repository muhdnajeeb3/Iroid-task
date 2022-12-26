import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './details.css'

function Details({details,launch}) {
 
  //const [launchyear, setLaunchyear] = useState(location.state?.Launch_Year)
  const { state } = useLocation();
  console.log("jjjj",state);
   
    
  return (
    <div className='details'>
        <h1 className='detailsheading'>Spacex Details</h1>
        <div className='detailslist'>
        <span>Flight Number : {state.flight_number} </span><br />
        <span>Mission Name : {state.mission_name} </span><br />
        <span>Launch Year : <span style={{color:"red"}}>{state.launch_year}</span> </span><br />
        <span>Nationality : {state?.Launch_Year}United States </span><br />
        <span>Launch Date Local : <span style={{color:"lightgreen"}}>{state?.launch_date_local}</span> </span><br />

        <span>Details : <span style={{color:"lightblue"}}>{state?.details}</span> </span>

        </div>

    </div>
  )
}

export default Details