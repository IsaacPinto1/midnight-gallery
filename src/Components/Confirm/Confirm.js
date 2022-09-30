import React from "react";
import './Confirm.css'

const Confirm = (props) =>{

    const HandleClick = () =>{
        props.function("none");
        props.clicked("none")
    }

    return (
        <div>
            <div onClick = {HandleClick} id = "confirm-background"></div>
            <div onClick = {HandleClick} id = "confirm-window"></div>
        </div>
    )
}

export default Confirm