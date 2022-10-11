import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const navigateTo = (route) => {
        navigate(route)
    }

    return (
        <section>
            <h1>Home</h1>
            <button onClick={() => navigateTo("/trips")}>Lista de Viagens</button>
            <button onClick={() => navigateTo("/login")}>Área ADM</button>
        </section>
    )
}

export default Home