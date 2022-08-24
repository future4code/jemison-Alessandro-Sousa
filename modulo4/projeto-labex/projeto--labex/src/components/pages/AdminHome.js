import React from "react";
import { useNavigate } from 'react-router-dom'

function AdminHome() {
    const navigate = useNavigate()

    const navigateTo = (route) => {
        navigate(route)
    }


    return (
        <section>
            <h1>Área do administrador</h1>
            <button onClick={() => navigateTo("/create-trip")}>Criar Viagem</button>
            <button onClick={() => navigateTo("/trip-details")}>Detalhes das viagens</button>
            <button onClick={() => navigateTo("/login")}>Logout</button>
        </section>    
    )
}

export default AdminHome