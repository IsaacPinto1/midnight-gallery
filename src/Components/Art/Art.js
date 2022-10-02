import React from "react";
import './Art.css'

const Art = (props) =>{

    const HandleClick = () =>{
        props.function("sure")
        props.clicked(props.title)
    }
    
    return (
        <div id = {props.id} className='art grow'>
                <div onClick = {HandleClick} className="button-27" id = "price">${props.price}</div>
                <div id = "art-and-text">
                    <div id = "image-and-name">
                        <img id = "image" src={require(`../../Images/Art/${props.image}`)}></img>
                        <p id = "title">{props.title}</p>
                    </div>
                    <div id = "desc">
                        <p id = "text">{props.text}</p>                    
                    </div>
                </div>
        </div>
    )
}

export default Art