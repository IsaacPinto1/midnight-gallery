import React from 'react'
import './Home.css'

const Home = (props) =>{

    const HandleClick = () =>{
        props.function("gallery")
    }

    return(
        <div>
            <div id = "background"></div>
            <div id = "home-main-text">Welcome to the Midnight Gallery</div>
            <div id = "view-button-cont">
                <button onClick = {HandleClick} className = "button-28">View Gallery</button>
            </div>
        </div>
    )
}

export default Home