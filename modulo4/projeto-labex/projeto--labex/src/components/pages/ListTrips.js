import React from "react";
import {useNavigate} from "react-router-dom"
import api  from "../../services/api.ts"
import {useEffect, useState} from "react"

function ListTrips() {
    const navigate = useNavigate();

    const goToApplicationForm = () => {
    navigate("/application-form")
}

    const [trips, setTrips] = useState([])

    useEffect(() => {
        api.get('/trips').then(response => {
            setTrips(response.data.trips)
        })
      }, []);


    return (
    <section>
        <h1>Lista de Viagens</h1>
        {trips.map((trip) => (
            <p key={trip.id}>  Nome = {trip.name} Planeta = {trip.planet} Data = {trip.date} </p>
        ))}
        <button onClick={goToApplicationForm}>Formulário de aplicação</button>
    </section> 
     
    )
   
}

export default ListTrips



