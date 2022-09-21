import React from "react";
import './Art.css'

const Art = (props) =>{


    return (
        <div id = {props.id} className='art'>
                <div id = "art-and-text">
                    <img id = "image" src={require(`../../Images/Art/${props.image}`)}></img>
                    <div id = "desc">
                        <p id = "text">{props.text}</p>                    
                    </div>
                </div>
        </div>
    )
}

export default Art